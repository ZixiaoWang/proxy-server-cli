import express, { Express } from 'express';
import proxy from 'http-proxy-middleware';
import cors from 'cors';
import net from 'net';
import colors from 'colors';
import { get } from 'lodash';

import { ProxyServerCli } from '../interface';
import { Logger } from '../logger';


const get_available_port = (port: number): Promise<number> => {
    const server: net.Server = net.createServer();

    const listenToPort = async (server: net.Server, port: number): Promise<number> => {
        return new Promise((resolve, reject) => {
            server.once('error', (err: any) => {
                if (err.code === 'EADDRINUSE') {
                    return listenToPort(server, port+1);
                } else {
                    reject(err);
                }
            });
            server.once('listening', () => {
                server.close();
                resolve(port);
            });
            server.listen(port);
        })
    }

    return listenToPort(server, port);
}


export const start_server = async (options?: ProxyServerCli.ServerOption | proxy.Config) => {
    const default_port: number = get(options, 'port') || 8080;
    const port: number = await get_available_port(default_port);
    const app: Express = express();

    app.use(cors());

    if (get(options, 'target')) {
        const proxyMiddleWare = proxy(options as proxy.Config);
        app.use(proxyMiddleWare);
    }

    app.listen(port, () => {
        const message: string = `Server is listening to ${ port.toString() }`
        Logger.showLog(colors.green(message))
    })
}