import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const child = spawn('node', [resolve(__dirname, 'files', 'script.js'), ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    return child;

};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* ['someArgument1', 'someArgument2'] */);
