import fs from 'fs';
import * as dotenv from 'dotenv'

export function ReadBuildState() {
    let readedJson;
    const file = fs.readFileSync('./package.json');
    var obj = JSON.parse(file);
    return obj.build;
}

export function ShowBuildStatus() {
    switch(ReadBuildState()) {
        case "build":
            var copy = dotenv.config('.env.production');
            return process.env.MODE;
        case "start":
            dotenv.config('.env.development');
            return process.env.MODE;
        case "deploy":
            dotenv.config('.env.domain');
            return process.env.MODE;
        default:
            return "Error";
    }
}