import fs, { promises as fsAsync } from 'fs'

export const remove = async () => {
    const currentDir = './src/fs/files/'
    const sourceFile = currentDir + 'fileToRemove.txt'

    if (!fs.existsSync(sourceFile)) {
        throw Error('FS operation failed')
    }

    await fsAsync.rm(sourceFile)

    console.log('Remove done!');
}

// remove()
