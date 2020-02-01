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

        this.start();
    }

    async start(): Promise<boolean> {
        this.program.parse(process.argv);
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
            .requiredOption('-t, --target <url>', `set target to proxy server, target is required`)
            .action(cmd => set(this.options, 'target', cmd.target));
    }

    private setConfigFilePath = () => {
        this.program
            .option('-c, --config ', `set config file path, proxy is disabled by default`)
            .action(cmd => set(this.options, 'config', cmd.config));
    }
}