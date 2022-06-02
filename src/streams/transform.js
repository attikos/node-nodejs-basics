export const transform = async () => {
    process.stdin.on('data', data => {
        const res = data.toString().split('').reverse().join('') + '\n';

        process.stdout.write(res);
    })
}

transform()
