import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const sourceFile = __dirname + '/files/fileToWrite.txt'

    var fileStream = fs.createWriteStream(sourceFile)

    process.stdin.on('data', data => {
        fileStream.write(data)
        fileStream.end()
        process.exit()
    })
}

// write()

// Uncomment write() + run in console:
// node ./src/streams/write.js
