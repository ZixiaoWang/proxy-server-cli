import fs from 'fs-extra';
import { get_default_config } from './default-config';
import { merge } from 'lodash';

const get_custom_config = async (filename?: string) => {
    const file: string = filename || './proxy.config.js';

    let custom_module = {};
    const default_module = get_default_config();

    if (/\.js$/.test(file)) {
        custom_module = await require(file);
    } else if (/\.json$/.test(file)) {
        custom_module = await fs.readJSON(file);
    } else {
        return default_module;
    }

    const config = merge(default_module, custom_module);

    return config;
}
