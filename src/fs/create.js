import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
    const filePath = __dirname + '/files/fresh.txt'
    const content = 'I am fresh and young'

    if (fs.existsSync(filePath)) {
        throw Error('FS operation failed')
    }

    await fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.log('err', err)

            throw Error(err)
        }

        console.log("File was saved!")
    })
}

// create()
