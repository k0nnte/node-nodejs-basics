import { createReadStream, createWriteStream } from 'fs';
import {pipeline} from 'stream/promises'
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const decompress = async () => {
     const outputPath = resolve(__dirname, 'files',  'fileToCompress.txt');
       const inputPath = resolve(__dirname, 'files', 'archive.gz');
   
       try{
           await pipeline(
               createReadStream(inputPath),
               createGunzip(),
               createWriteStream(outputPath)
   
           );
   
   
       }catch(err){
           console.error(err);
       }
};

await decompress();