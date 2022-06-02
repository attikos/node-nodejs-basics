
import { createGunzip } from 'zlib'
import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
    const sourceFile = __dirname + '/files/archive.gz'
    const targetFile = __dirname + '/files/fileToCompress.txt'

    const unzipStream = createGunzip();
    const source = createReadStream(sourceFile);
    const target = createWriteStream(targetFile)

    await pipeline(source, unzipStream, target);

    console.log('File unzipped successfully!')
};

decompress()
