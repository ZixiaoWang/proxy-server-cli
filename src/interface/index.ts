import { Config } from 'http-proxy-middleware';

export namespace ProxyServerCli {
    export interface ServerOption extends Config {
        port?: number,
        config?: string | boolean,
        pathMatch?: string
    }
}