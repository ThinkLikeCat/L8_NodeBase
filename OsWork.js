import os from 'os';

export function printOSInfo() {
    console.log(`System type: ${os.platform()}\n` +
                `Free memory: ${os.freemem()} bytes\n` +
                `Home directory: ${os.homedir()}\n` +
                `Name: ${os.hostname()}\n` +
                `Network intrface: ${os.networkInterfaces()}`);
}

export const more4GB = () => Boolean(os.freemem()/1073741824 > 4.0);

export function accessUse() {
    if (process.env.MODE == "admin") {
        printOSInfo();
    }
}