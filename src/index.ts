import { start_server } from './server';
import { Program } from './cli';
import { ProxyServerCli } from './interface';
import { Banner } from './logger';

(async () => {
    const program: Program = new Program();
    const options: ProxyServerCli.ServerOption = await program.getOptions();

    await program.start();
    await Banner.show('Proxy Server');
    start_server(options);
})()