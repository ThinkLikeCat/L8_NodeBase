require('dotenv').config()
const os = require('os')

function printEnv() {
    console.log(`Name: ${process.env.NAME}\n` +
        `Last name: ${process.env.LAST_NAME}\n` +
        `Group number: ${process.env.GROUP_NUMBER}\n` + 
        `Number in group: ${process.env.NUMBER_IN_GROUPE}`)
}

function printOSInfo() {
    console.log(`System type: ${os.platform()}\n` +
                `Free memory: ${os.freemem()} bytes\n` +
                `Home directory: ${os.homedir()}\n` +
                `Name: ${os.hostname()}\n` +
                `Network intrface: ${os.networkInterfaces()}`)
}

const more4GB = () => os.freemem()/1000000000 > 4.0;

function accessUse() {
    if (process.env.MODE == "admin") {
        printOSInfo();
    }
}

printEnv()
printOSInfo()
console.log(`More than 4gb free space? ${Boolean(more4GB)}`);
accessUse();