const fs = require('fs');
const path = require('path');

exports.writeInFile = function(filePath, data) {
    fs.appendFile(filePath, data, function(error) {
            if (error) {
                throw error;
            }
    })
}

exports.readFromFile = function(filePath) {
    fs.readFile(filePath, function(error, data) {
            if (error) {
                throw error;
            }
            
            return data.ToString();    
        }
    )
}

exports.clearWriteInFile = function(filePath, data) {
    fs.writeFile(filePath, data, function(error) {
            if (error) {
                throw error;
            }
        }
    )
}

exports.deleteFileContext = (filePath) => clearWriteInFile(filePath, "");

exports.deleteNoiseInFile = function(filePath) {
    let content = readFromFile(filePath);
    content = content.toLowerCase();
    content = content.replace(/[^a-z]/g, '');
    clearWriteInFile(filePath, content);
}

exports.сopyToOtherFile = function(FilePath, copyFilePath) {
    let content = readFromFile(copyFilePath);
    clearWriteInFile(FilePath, content);
}

exports.createDirectory = function(pathDirect) {
    fs.mkdir(pathDirect, function(error) {
            if (error) {
                console.log(error);
            }
        } 
    )
}

exports.deleteDirectory = function(pathDirect) {
    fs.readdir(pathDirect, function(error, files) {
            if (error) {
                throw error;
            }
            
            files.forEach(file => {
                if(file === "node_modules" || file === ".git" || file === ".env" || file === ".gitignore") {
                   return; 
                }

                let fullFilePath = path.join(pathDirect, file);
                fs.unlik(fullFilePath);
            });
        }
    )
    fs.rmdir(pathDirect);
}

exports.printFilesPath = function(pathDirect) {
    fs.readdir(pathDirect, function(error, files) {
            if (error) {
                throw error;
            }

            files.forEach(file => {
                if(file === "node_modules" || file === ".git" || file === ".env" || file === ".gitignore") {
                   return; 
                }

                let fullFilePath = path.join(pathDirect, file);
                console.log(fullFilePath);
            });
        }
    )
}

exports.deleteAll = function(pathDirect) {
    fs.readdir(pathDirect, function(error, files) {
                if (error) {
                    throw error;
                }
    
                if(file === "node_modules" || file === ".git" || file === ".env" || file === ".gitignore") {
                    return; 
                }
    
                files.forEach(file => {
                    let fullFilePath = path.join(pathDirect, file);
                    deleteDirectory(fullFilePath);
                    fs.rm(fullFilePath);
                });
        }
    )
}