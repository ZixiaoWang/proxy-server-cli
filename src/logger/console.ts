import colors from 'colors';
import { get_timestamp } from './tools/get_timestamp';

export const showLog = (arg: any) => {
    const type: string = `[LOG]`;
    const timestamp: string = get_timestamp();
    console.log(`${ type } ${ timestamp } ${ arg }`);
}

export const showWarn = (arg: any) => {
    const type: string = `[${ colors.bgYellow('WARN') }]`;
    const timestamp: string = get_timestamp();
    console.log(`${ type } ${ timestamp } ${ arg }`);
}

export const showInfo = (arg: any) => {
    const type: string = `[${ colors.cyan('INFO') }]`;
    const timestamp: string = get_timestamp();
    console.log(`${ type } ${ timestamp } ${ arg }`);
}

export const showError = (arg: any) => {
    const type: string = `[${ colors.bgRed('ERROR') }]`;
    const timestamp: string = get_timestamp();
    console.log(`${ type } ${ timestamp } ${ arg }`);
}