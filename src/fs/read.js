import fs, { promises as fsAsync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const sourceFile = __dirname + '/files/fileToRead.txt'

    if (!fs.existsSync(sourceFile)) {
        throw Error('FS operation failed')
    }

    const file = await fsAsync.readFile(sourceFile, 'utf8')

    console.log('file', file)
}

// read()
