import { Transform } from 'stream'

export const transform = async () => {
    // ver. 1
    // process.stdin.on('data', data => {
    //     const res = data.toString().split('').reverse().join('') + '\n';

    //     process.stdout.write(res);
    // })

    // ver. 2
    const revert = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join('') + '\n');
      },
    });

    process.stdin.pipe(revert).pipe(process.stdout)
}

transform()
