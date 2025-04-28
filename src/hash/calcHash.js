import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const calculateHash = async () => {
    const path = join(__dirname, 'files',  'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');

    const stream = createReadStream(path);

    stream.on('data', chunk => {
        hash.update(chunk);
      });

      stream.on('end', () => {
        const result = hash.digest('hex');
        console.log(result);
      });

      stream.on('error', err => {
        console.error(err.message);
      });
    
};

await calculateHash();