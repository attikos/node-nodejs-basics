import fs, { promises as fsAsync } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
    const currentDir = __dirname + '/files/'

    if (!fs.existsSync(currentDir)) {
        throw Error('FS operation failed')
    }

    const files = await fsAsync.readdir(currentDir);

    files.forEach(x => console.log(x));
};

// list()
