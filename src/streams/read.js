import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const currentDir = __dirname;
    const sourceFile = currentDir + '/files/fileToRead.txt'

    var fileStream = fs.createReadStream(sourceFile)

    fileStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());

        process.exit()
    })
}

read()
