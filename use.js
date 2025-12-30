const strSor = require('./Modules/StringSorter.js');
const daLoader = require('./Modules/DataLoader.js');
const files = require('./Modules/FilesButModules.js');

exports.solution = async function() {
let res = await daLoader.load("https://jsonplaceholder.typicode.com/users");
if(!res.siteInfo) {
    console.log(res.error);
    return;
}
const js = await res.siteInfo.json();
var users = [];
emailStr = "";
js.forEach(element => {
   users.push(element.name);
   emailStr += element.email+'\n';
});
let sortedUsers = strSor.sort(users);
var usersStr = "";
sortedUsers.forEach(element => {
   usersStr +=element + '\n';
});


files.createDirectory('./users')

files.clearWriteInFile(__dirname + '/users/names.txt', usersStr);
files.clearWriteInFile(__dirname + '/users/emails.txt', emailStr);
}