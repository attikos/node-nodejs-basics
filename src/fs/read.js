import fs, { promises as fsAsync } from 'fs'

export const read = async () => {
    const currentDir = './src/fs/files/'
    const sourceFile = currentDir + 'fileToRead.txt'

    if (!fs.existsSync(sourceFile)) {
        throw Error('FS operation failed')
    }

    const file = await fsAsync.readFile(sourceFile, 'utf8')

    console.log('file', file)
}

read()
