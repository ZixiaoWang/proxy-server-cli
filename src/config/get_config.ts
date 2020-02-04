import { get_default_config } from './get_default-config';
import { get_custom_config } from './get-custom-config';
import { assign } from 'lodash';

export const get_config = async (filename?: string) => {
    try {
        if (filename) {
            const custom_config = await get_custom_config(filename);
            const default_config = get_default_config();
            const config = assign(default_config, custom_config);
            return config;
        }

        return get_default_config();
    } catch (error) {
        throw error;
    }
}