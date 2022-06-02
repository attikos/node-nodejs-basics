import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const currentDir = __dirname;
    const sourceFile = currentDir + '/files/fileToWrite.txt'

    var fileStream = fs.createWriteStream(sourceFile)

    process.stdin.on('data', data => {
        fileStream.write(data)
        fileStream.end()
        process.exit()
    })
}

write()
