import fs, { promises as fsAsync } from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
    const sourceDir = __dirname + '/files/'
    const targetDir = __dirname + '/files_copy/'

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

// copy()
