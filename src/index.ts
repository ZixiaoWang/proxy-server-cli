import { start_server } from './server';
import { Program } from './cli';
import { ProxyServerCli } from './interface';
import { Banner } from './logger';

(async () => {
    const program: Program = new Program();
    const isProgramReady: boolean = await program.start();
    const options: ProxyServerCli.ServerOption = await program.getOptions();

    if (isProgramReady) {
        await Banner.show('Proxy\nServer', 'Basic');
        start_server(options);
    }
})()