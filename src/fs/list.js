import fs, { promises as fsAsync } from 'fs'

export const list = async () => {
    const currentDir = './src/fs/files/'

    if (!fs.existsSync(currentDir)) {
        throw Error('FS operation failed')
    }

    const files = await fsAsync.readdir(currentDir);

    files.forEach(x => console.log(x));
};

list()
