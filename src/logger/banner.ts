import figlet from 'figlet';
import colors from 'colors';

const show = async (text: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        figlet.text(text, 'Colossal', (err: null | Error, text: string | undefined) => {
            if (err) {
                reject(err);
            }
            console.log('\n\n');
            console.log(colors.green(text || '-_-'));
            console.log('\n\n');
            
            resolve(text);
        })
    })
}

export const Banner = {
    show
}