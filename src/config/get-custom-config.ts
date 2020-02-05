import fs from 'fs-extra';
import path from 'path';

export const get_custom_config = async (filename?: string) => {
    const file: string = filename || './proxy.config.js';
    const filepath: string = path.resolve('./', file);
    let custom_module = {};

    try {
        if (/\.js$/.test(file)) {
            custom_module = await import(filepath);
        } else if (/\.json$/.test(file)) {
            custom_module = await fs.readJSON(filepath);
        } else {
            const error: string = `${ filename } is not a valid config file, use default options instead`;
            throw new Error(error);
        }
        
        return custom_module;
    } catch (error) {
        throw error;
    }
}
