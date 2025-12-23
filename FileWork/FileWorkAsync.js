import fs from 'fs'
import path from 'path'

export async function writeInFile(filePath, data) {
    await fs.appendFile(filePath, data, function(error) {
            if (error) {
                console.log(error);
            }
        }
    )
}

export async function readFromFile(filePath) {
    await fs.readFile(filePath, function(error, data) {
            if (error) {
                return console.log(error)
            }
            return data.ToString()    
        }
    )
}

export async function clearWriteInFile(filePath, data) {
    await fs.writeFile(filePath, data, function(error) {
            if (error) {
                console.log(error)
            }
        }
    )
}

export const deleteFileContext = (filePath) => clearWriteInFile(filePath, "")

export async function deleteNoiseInFileSync(filePath) {
    let content = await readFromFile(filePath)
    content = content.toLowerCase()
    content = content.replace(/[^a-z]/g, '');
    await clearWriteInFile(filePath, content)
}

export async function сopyToOtherFile(FilePath, copyFilePath) {
    let content = await readFromFile(copyFilePath)
    await clearWriteInFile(FilePath, content)
}

export async function printFilesPath(pathDirect) {
    await fs.readdir(pathDirect, function(error, files) {
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