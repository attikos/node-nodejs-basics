import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
    const scriptPath = __dirname + '/files/script.js'
    const subprocess = fork(scriptPath, args, {
        stdio: ['pipe', 'pipe', 'ignore', 'ipc']
    });

    process.stdin.pipe(subprocess.stdin)
    subprocess.stdout.pipe(process.stdout)
};

// spawnChildProcess(['--test', 'foo']);
