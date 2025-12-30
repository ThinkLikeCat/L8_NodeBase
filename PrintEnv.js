import * as dotenv from 'dotenv'
dotenv.config()

export function printEnv() {
    console.log(`Name: ${process.env.NAME}\n` +
        `Last name: ${process.env.LAST_NAME}\n` +
        `Group number: ${process.env.GROUP_NUMBER}\n` + 
        `Number in group: ${process.env.NUMBER_IN_GROUPE}`);
}