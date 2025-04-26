import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const rename = async () => {
    const oldFile= path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const newFile = path.resolve(__dirname, 'files' ,'properFilename.md');

    try{
        await fs.access(oldFile);
    }catch(err){
        throw new Error('FS operation failed');
    }

    try{
        await fs.access(newFile)
        throw new Error('FS operation failed');
    }catch(err){
        if(err.code !== 'ENOENT'){
            throw err;
        }
    }

    await fs.rename(oldFile, newFile);
};

await rename();