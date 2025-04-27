import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const file = join(__dirname, 'files', 'fileToWrite.txt');
    const writableStream = createWriteStream(file, { encoding: 'utf-8' });
    process.stdin.pipe(writableStream);
};

await write();