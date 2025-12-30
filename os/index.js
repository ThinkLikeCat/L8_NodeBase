/*import * as task1 from "../PrintEnv.js";
import * as task2 from "../OsWork.js";
import * as task3 from "../FileWork/FileWorkAsync.js";
import * as task3Sync from "../FileWork/FileWorkSync.js";
import * as task4 from "./Cryptography.js";*/
//import * as task5 from "./WorkStatus.js";

// Задания выше были с "type": "modeule", так как я не дошел до импортирования модулей, то я выполнил такой странной реализацией
// Далее все через "type": "commonjs"

//const strSor = require('../Modules/StringSorter.js');
//const daLoader = require('../Modules/DataLoader.js');
const uses = require('../use.js');

//task1.printEnv()

/*task2.printOSInfo()
console.log(`More than 4gb free space? ${task2.more4GB()}`);
task2.accessUse();*/

//task3Sync.createDirectorySync("D:/Make");

//await task4.DoCrypto();

//console.log(task5.ShowBuildStatus());

//console.log(strSor.sort(["D      mitry", "M ike", "  Antoniy"]));

//daLoader.load();

uses.solution();