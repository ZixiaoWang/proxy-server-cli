import { get_default_config } from './default-config';
import { get_custom_config } from './custom-config';
import { merge } from 'lodash';

export const get_config = async (filename?: string) => {
    try {
        const custom_config = await get_custom_config(filename);
        const default_config = get_default_config();
        const config = merge(default_config, custom_config);
        return config;
    } catch (e) {
        throw new Error(e);
    }
}