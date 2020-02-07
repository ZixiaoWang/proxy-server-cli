import path from 'path';
import program, { CommanderStatic } from 'commander';
import colors from 'colors';
import { set, assign } from 'lodash';
import fs from 'fs-extra';
import { ProxyServerCli } from '../interface';
import { get_config, get_config_template } from '../config';

export class Program {
    public program: CommanderStatic = program;
    public options: ProxyServerCli.ServerOption = {}

    constructor() {
        this.setPort();
        this.setTarget();
        this.setConfigFilePath();
        this.setPathMatch();
        this.initConfig();
    }

    async init(): Promise<any> {
        const filename: string = 'proxy.config.js';
        const filepath: string = path.resolve('./', filename);
        const filecontent: string = get_config_template();

        try {
            await fs.outputFile(filepath, filecontent);
            console.log(colors.green(filename) + ' has been created');
            return true;
        } catch (e) {
            console.error(e);
        }
    }

    async start(): Promise<boolean> {
        this.program.parse(process.argv);

        if (process.argv.length === 2) {
            this.program.outputHelp();
            console.log('\n');
            return false;
        }

        if (this.program.init) {
            return false;
        }

        return true;
    }

    async getOptions(): Promise<ProxyServerCli.ServerOption> {
        try {
            let config_file_path: string | undefined = './proxy.config.js';

            if (this.options.config && typeof this.options.config === 'string') {
                config_file_path = this.options.config as string;
            } else if (this.options.config === undefined) {
                config_file_path = undefined;
            }

            const preset_options: ProxyServerCli.ServerOption = await get_config(config_file_path);
            const cli_options: ProxyServerCli.ServerOption = this.options;
            const options: ProxyServerCli.ServerOption = assign(preset_options, cli_options);

            if (isNaN(options.port as any) === true) {
                options.port = 8080;
            }

            return options;
        } catch (error) {
            throw error;
        }
    }

    private initConfig = () => {
        this.program
            .option('-i, --init', 'initailize the config file')
            .action(cmd => {
                if (cmd.init) {
                    this.init();
                }
            });
    }

    private setPort = () => {
        this.program
            .option('-p, --port [serverPort]', `set port to proxy server, default is ${ colors.green('8080') }`)
            .action(cmd => {
                if (cmd.port && /\d+/.test(cmd.port)) {
                    set(this.options, 'port', parseInt(cmd.port));
                }
            });
    }

    private setTarget = () => {
        this.program
            .option('-t, --target <url>', `set target to proxy server, target is required`)
            .action(cmd => set(this.options, 'target', cmd.target));
    }

    private setConfigFilePath = () => {
        this.program
            .option('-c, --config [filepath]', `set config file path, ${ colors.green('./proxy.config.js') } will be used by default`)
            .action(cmd => set(this.options, 'config', cmd.config));
    }

    private setPathMatch = () => {
        this.program
            .option(
                '-P, --path-match <paths>', 
                'specify path(s) to proxy, otherwise the request will be sent without proxy.\n' +
                'if there are multiple paths, use "," to separate the path.\n' +
                `e.g. ${ colors.cyan('$ start-proxy-server --path-match "/path1,/path2" --target "https://mydomain.com"') }`
            )
            .action(cmd => set(this.options, 'pathMatch', cmd.pathMatch));
    }
}