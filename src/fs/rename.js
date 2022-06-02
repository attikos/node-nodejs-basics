import fs, { promises as fsAsync } from 'fs'

export const rename = async () => {
    const currentDir = './src/fs/files/'
    const sourceFile = currentDir + 'wrongFilename.txt'
    const targetFile = currentDir + 'properFilename.md'

    if (!fs.existsSync(sourceFile)) {
        throw Error('FS operation failed')
    }

    if (fs.existsSync(targetFile)) {
        throw Error('FS operation failed')
    }

    await fsAsync.rename(sourceFile, targetFile)

    console.log('Rename done!')
};

rename()
