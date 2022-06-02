import fs, { promises as fsAsync } from 'fs'
import path from 'path'

export const copy = async () => {
    const currentDir = './src/fs/'
    const sourceDir = currentDir + 'files/'
    const targetDir = currentDir + 'files_copy/'

    if (!fs.existsSync(sourceDir)) {
        throw Error('FS operation failed')
    }

    if (fs.existsSync(targetDir)) {
        throw Error('FS operation failed')
    }

    await fsAsync.mkdir(targetDir, { recursive: true })

    const sourceFileList = await fsAsync.readdir(sourceDir, { withFileTypes: true });

    for (let file of sourceFileList) {
        let srcPath    = path.join(sourceDir, file.name);
        let targetPath = path.join(targetDir, file.name);

        if (file.isDirectory()) {
            await copyDir(srcPath, targetPath)
        }
        else {
            await fsAsync.copyFile(srcPath, targetPath);
        }
    }
};

copy()
