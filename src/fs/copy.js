import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
   const firstDir = path.resolve(__dirname, 'files');
    const secondDir = path.resolve(__dirname, 'files_copy');

    try{
       await fs.access(firstDir);
    }catch(err){
        throw new Error('FS operation failed');
    }

    try{
       await fs.access(secondDir);
        throw new Error('FS operation failed');
    }catch(err){
        if(err.code !== 'ENOENT'){
           throw err
            
        }
    }

    await fs.mkdir(secondDir);

    const entry = await fs.readdir(firstDir, { withFileTypes: true });
    
    for (let i of entry){
        const firstPath = path.join(firstDir, i.name);
        const secondPath = path.join(secondDir, i.name);
        await fs.copyFile(firstPath, secondPath);
        
    }

    
};

await copy();
