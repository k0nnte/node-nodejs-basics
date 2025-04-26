import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const remove = async () => {
    const file = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    try{
        await fs.access(file);
        await fs.unlink(file);
    }catch(err){
        if(err.code === 'ENOENT'){
            throw new Error('FS operation failed')
        }else{
            throw err;
        }
    }
};

await remove();