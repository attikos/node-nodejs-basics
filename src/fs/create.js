import fs from 'fs'

export const create = async () => {
    const currentDir = './src/fs/files/'
    const filePath = currentDir + 'fresh.txt'
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

create()
