import { createGzip } from 'zlib'
import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
    const sourceFile = __dirname + '/files/fileToCompress.txt'
    const targetFile = __dirname + '/files/archive.gz'

    const gzip = createGzip();
    const source = createReadStream(sourceFile);
    const target = createWriteStream(targetFile)

    await pipeline(source, gzip, target);

    console.log('File zipped successfully!')
};

compress()
