import fs from 'fs'
import path from 'path'

export function writeInFileSync(filePath, data) {
    fs.appendFileSync(filePath, data, function(error) {
            if (error) {
                console.log(error)
            }
        }
    )
}

export function readFromFileSync(filePath) {
    fs.readFileSync(filePath, function(error, data) {
            if (error) {
                return console.log(error)
            }
            return data.ToString()    
        }
    )
}

export function clearWriteInFileSync(filePath, data) {
    fs.writeFileSync(filePath, data, function(error) {
            if (error) {
                console.log(error)
            }
        }
    )
}

export const deleteFileContextSync = (filePath) => clearWriteInFileSync(filePath, "")

export function deleteNoiseInFileSync(filePath) {
    let content = readFromFileSync(filePath)
    content = content.toLowerCase()
    content = content.replace(/\d/g, '');
    clearWriteInFileSync(filePath, content)
}

export function сopyToOtherFileSync(FilePath, copyFilePath) {
    let content = readFromFileSync(copyFilePath)
    clearWriteInFileSync(FilePath, content)
}

export function createDirectorySync(pathDirect) {
    fs.mkdir(pathDirect, function(error) {
            if (error) {
                console.log(error)
            }
        } 
    )
}

export function deleteDirectorySync(pathDirect){
    fs.readdirSync(pathDirect, function(error, files) {
            if (error) {
                return console.log(error)
            }
            files.forEach(file => {
                let fullFilePath = path.join(pathDirect, file)
                fs.unlikSync(fullFilePath)
            });
        }
    )
    fs.rmdirSync(pathDirect)
}

export function printFilesPathSync(pathDirect) {
    fs.readdirSync(pathDirect, function(error, files) {
            if (error) {
                return console.log(error)
            }
            files.forEach(file => {
                let fullFilePath = path.join(pathDirect, file)
                console.log(fullFilePath)
            });
        }
    )
}