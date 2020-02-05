import fs from 'fs-extra';
import path from 'path';
import colors from 'colors';
import { Logger } from '../logger';

export const get_custom_config = async (filename?: string) => {
    const file: string = filename || './proxy.config.js';
    const filepath: string = path.resolve('./', file);
    let custom_module = {};

    try {
        if (/\.js$/.test(file)) {
            const module = await import(filepath);
            custom_module = module.default;

            if (typeof custom_module === 'function') {
                custom_module = custom_module();
            }

            Logger.showInfo(`Find custom configuration file: ${ colors.green(file) }`);
        } else if (/\.json$/.test(file)) {
            custom_module = await fs.readJSON(filepath);
            Logger.showInfo(`Find custom configuration file: ${ colors.green(file) }`);
        } else {
            const error: string = `${ filename } is not a valid config file, use default options instead`;
            throw new Error(error);
        }
        
        return custom_module;
    } catch (error) {
        throw error;
    }
}
