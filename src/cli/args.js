export const parseArgs = () => {
    const args = process.argv.slice(2)

    const res = [];
    args.forEach((x, i) => {
        if (i % 2) {
            res.push(`${args[i - 1]} is ${x}`)
        }
    })

    console.log(res.join(', '))
};

parseArgs()
