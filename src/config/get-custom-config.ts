import fs from 'fs-extra';

export const get_custom_config = async (filename?: string) => {
    const file: string = filename || './proxy.config.js';
    let custom_module = {};

    try {
        if (/\.js$/.test(file)) {
            custom_module = await require(file);
        } else if (/\.json$/.test(file)) {
            custom_module = await fs.readJSON(file);
        } else {
            const error: string = `${ filename } is not a valid config file, use default options instead`;
            throw new Error(error);
        }
        
        return custom_module;
    } catch (e) {
        throw new Error(e);
    }
}
