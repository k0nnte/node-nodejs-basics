import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const list = async () => {
    const files = path.resolve(__dirname, 'files');

    try{
        await fs.access(files);
    }catch(err){
        throw new Error('FS operation failed');
    }

  const fileMas = await fs.readdir(files);
  console.log(fileMas);
  
};

await list();