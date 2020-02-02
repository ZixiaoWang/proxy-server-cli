import program, { CommanderStatic } from 'commander';
import colors from 'colors';
import { set, assign } from 'lodash';
import { ProxyServerCli } from '../interface';
import { get_config } from '../config';

export class Program {
    public program: CommanderStatic = program;
    public options: ProxyServerCli.ServerOption = {}

    constructor() {
        this.setPort();
        this.setTarget();
        this.setConfigFilePath();
        this.setPathMatch();
    }

    async start(): Promise<boolean> {
        this.program.parse(process.argv);

        if (process.argv.length === 2) {
            this.program.outputHelp();
            console.log('\n');
            return false;
        }

        return true;
    }

    async getOptions(): Promise<ProxyServerCli.ServerOption> {
        try {
            const preset_options: ProxyServerCli.ServerOption = await get_config(this.options.config);
            const cli_options: ProxyServerCli.ServerOption = this.options;

            return assign(preset_options, cli_options);
        } catch (e) {
            throw new Error(e);
        }
    }

    private setPort = () => {
        this.program
            .option('-p, --port <serverPort>', `set port to proxy server, default is ${ colors.green('8080') }`)
            .action(cmd => set(this.options, 'port', parseInt(cmd.port) || 8080));
    }

    private setTarget = () => {
        this.program
            .option('-t, --target <url>', `set target to proxy server, target is required`)
            .action(cmd => set(this.options, 'target', cmd.target));
    }

    private setConfigFilePath = () => {
        this.program
            .option('-c, --config', `set config file path, proxy is disabled by default`)
            .action(cmd => set(this.options, 'config', cmd.config));
    }

    private setPathMatch = () => {
        this.program
            .option(
                '-P, --path-match <paths>', 
                'specify path(s) to proxy, otherwise the request will be sent without proxy.\n' +
                'If there are multiple paths, use "," to separate the path.\n' +
                `e.g. ${ colors.cyan('$ proxy-server --path-match "/path1,/path2" --target "https://mydomain.com"') }`
            )
            .action(cmd => set(this.options, 'pathMatch', cmd.pathMatch));
    }
}