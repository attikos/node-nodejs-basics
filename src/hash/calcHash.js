import fs, { promises as fsAsync } from 'fs'
import crypto from 'crypto'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const sourceFile = __dirname + '/files/fileToCalculateHashFor.txt'

    if (!fs.existsSync(sourceFile)) {
        throw Error('FS operation failed')
    }

    const file = await fsAsync.readFile(sourceFile, 'utf8')

    const res = crypto.createHash('sha256').update(file).digest('hex')

    console.log(res)
}

// calculateHash()
