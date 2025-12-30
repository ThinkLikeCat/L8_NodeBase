import fs from 'fs';
import * as dotenv from 'dotenv'

dotenv.config()

export function ReadBuildState() {
    let readedJson;
    const file = fs.readFileSync('./package.json');
    var obj = JSON.parse(file);
    return obj.build;
}

export function ShowBuildStatus() {
    switch(ReadBuildState()) {
        case "build":
            return process.env.production.MODE;
        case "start":
            return process.env.development.MODE;
        case "deploy":
            return process.env.domain.MODE;
        default:
            return "Error";
    }
}