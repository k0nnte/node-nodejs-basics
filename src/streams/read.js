import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const read = async () => {
    const file = join(__dirname, 'files', 'fileToRead.txt');
     const stream = createReadStream(file, {encoding: 'utf-8'});

    stream.pipe(process.stdout);

    stream.on('end', () => {
        console.log();
    });
    
};

await read();