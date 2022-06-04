import { Worker } from 'worker_threads'

export const performCalculations = async () => {
    return new Promise((resolve) => {
        const threadCount = 4;
        const threads = [];
        const result = [];

        for (let i = 0; i <= threadCount - 1; i++) {
            threads.push(new Worker('./src/wt/worker.js', { workerData: 20 + i }));
        }

        threads.forEach((worker, i) => {
            worker.on('error', () => {
                result[i] = {
                    status: 'error',
                    data: null,
                }
            });

            worker.on('message', (data) => {
                result[i] = {
                    status: 'resolved',
                    data,
                }
            });

            worker.on('exit', () => {
                if (result.length === threadCount) {
                    resolve(result)
                }
            })
        })
    })

};

performCalculations().then(res => console.log(JSON.stringify(res)));
