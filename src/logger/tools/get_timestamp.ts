export const get_timestamp = (): string => {
    return new Date().toJSON().replace('T', ' ').replace(/\.\w{4}$/, '');
}