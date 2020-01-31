import program, { CommanderStatic } from 'commander';
import colors from 'colors';
import { set } from 'lodash';
import { ProxyServerCli } from '../interface';

export class Program {
    public program: CommanderStatic = program;
    public options: ProxyServerCli.ServerOption = {}

    constructor() {
        this.setPort();
        this.setTarget();
        this.setConfigFilePath();
    }

    start(callback?: () => void): void {
        program.parse(process.argv);
        if (callback && typeof callback === 'function') {
            callback();
        }
    }

    getOptions(): ProxyServerCli.ServerOption {
        return this.options;
    }

    private setPort = () => {
        this.program
            .requiredOption('-p, --port <port>', `set port to proxy server, default is ${ colors.green('8080') }`)
            .action(cmd => set(this.options, 'port', parseInt(cmd.port) || 8080));
    }

    private setTarget = () => {
        this.program
            .requiredOption('-t, --target <url>', `set target to proxy server ${ colors.red('required') }`)
            .action(cmd => set(this.options, 'target', cmd.target));
    }

    private setConfigFilePath = () => {
        this.program
            .option('-c, --config ', `set config file path, proxy is disabled by default`)
            .action(cmd => set(this.options, 'config', cmd.config));
    }
}