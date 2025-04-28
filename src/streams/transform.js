import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { Transform } from 'stream';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const transform = async () => {
 const tra = new Transform({
    transform(shunk, _ , callback){
       callback(null, String(shunk).split('').reverse().join(''));
        
    }
    
 })
    process.stdin.pipe(tra).pipe(process.stdout);

    
};

await transform();