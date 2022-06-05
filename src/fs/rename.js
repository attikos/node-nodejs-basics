import fs, { promises as fsAsync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const rename = async () => {
    const sourceFile = __dirname + '/files/wrongFilename.txt'
    const targetFile = __dirname + '/files/properFilename.md'

    if (!fs.existsSync(sourceFile)) {
        throw Error('FS operation failed')
    }

    if (fs.existsSync(targetFile)) {
        throw Error('FS operation failed')
    }

    await fsAsync.rename(sourceFile, targetFile)

    console.log('Rename done!')
};

// rename()
