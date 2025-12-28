import fs from 'fs'
import path from 'path'

export function writeInFile(filePath, data) {
    fs.appendFile(filePath, data, function(error) {
            if (error) {
                throw error
            }
        }
    )
}

export function readFromFile(filePath) {
    fs.readFile(filePath, function(error, data) {
            if (error) {
                throw error
            }
            return data.ToString()    
        }
    )
}

export function clearWriteInFile(filePath, data) {
    fs.writeFile(filePath, data, function(error) {
            if (error) {
                throw error
            }
        }
    )
}

export const deleteFileContext = (filePath) => clearWriteInFile(filePath, "")

export function deleteNoiseInFile(filePath) {
    let content = readFromFile(filePath)
    content = content.toLowerCase()
    content = content.replace(/[^a-z]/g, '');
    clearWriteInFile(filePath, content)
}

export function сopyToOtherFile(FilePath, copyFilePath) {
    let content = readFromFile(copyFilePath)
    clearWriteInFile(FilePath, content)
}

export function printFilesPath(pathDirect) {
    fs.readdir(pathDirect, function(error, files) {
            if (error) {
                throw error
            }
            files.forEach(file => {
                let fullFilePath = path.join(pathDirect, file)
                console.log(fullFilePath)
            });
        }
    )
}