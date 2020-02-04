import figlet, { Fonts } from 'figlet';
import colors from 'colors';

const show = async (text: string, fonts: Fonts = 'Basic'): Promise<string> => {
    return new Promise((resolve, reject) => {
        figlet.text(text, fonts, (err: null | Error, text: string | undefined) => {
            if (err) {
                reject(err);
            }
            
            console.log('\n');
            console.log(colors.green(text || '-_-'));
            resolve(text);
        })
    })
}

export const Banner = {
    show
}