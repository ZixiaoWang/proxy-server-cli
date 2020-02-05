#!/usr/bin/env node

import { start_server } from './server';
import { Program } from './cli';
import { ProxyServerCli } from './interface';
import { Banner } from './logger';

import colors from 'colors';

(async () => {
    try {
        const program: Program = new Program();
        const isProgramReady: boolean = await program.start();
        const options: ProxyServerCli.ServerOption = await program.getOptions();
    
        if (isProgramReady) {
            await Banner.show('Proxy Server', 'Basic');
            start_server(options);
        }
    } catch (e) {
        console.log('\n');
        console.log(e);
        console.log('\n');
        console.log(colors.red('Failed to start the server'))
    }
})()