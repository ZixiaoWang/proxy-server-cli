#!/usr/bin/env node

import { start_server } from './server';
import { Program } from './cli';
import { ProxyServerCli } from './interface';

(async () => {
    const program: Program = new Program();
    const options: ProxyServerCli.ServerOption = await program.getOptions();
    
    await program.start();
    start_server(options);
})()