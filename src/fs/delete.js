import fs, { promises as fsAsync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    const sourceFile = __dirname + '/files/fileToRemove.txt'

    if (!fs.existsSync(sourceFile)) {
        throw Error('FS operation failed')
    }

    await fsAsync.rm(sourceFile)

    console.log('Remove done!');
}

// remove()
