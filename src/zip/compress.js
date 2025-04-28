import { createReadStream, createWriteStream } from 'fs';
import {pipeline} from 'stream/promises'
import {  createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compress = async () => {
    const inputPath = resolve(__dirname, 'files',  'fileToCompress.txt');
    const outputPath = resolve(__dirname, 'files', 'archive.gz');

    try{
        await pipeline(
            createReadStream(inputPath),
            createGzip(),
            createWriteStream(outputPath)

        );


    }catch(err){
        console.error(err);
    }
};

await compress();