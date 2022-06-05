import { Worker } from 'worker_threads'
import { fileURLToPath } from 'url';
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
    const scriptPath = __dirname + '/worker.js'

    return new Promise((resolve) => {
        const threadCount = 4;
        const threads = [];
        const result = [];

        for (let i = 0; i <= threadCount - 1; i++) {
            threads.push(new Worker(scriptPath, { workerData: 20 + i }));
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
                if (result.filter(x => x).length === threadCount) {
                    resolve(result)
                }
            })
        })
    })

};

performCalculations().then(res => console.log(JSON.stringify(res)));
