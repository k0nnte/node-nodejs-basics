import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
   const file = path.resolve(__dirname, 'files', 'fileToRead.txt');

   try{
        await fs.access(file);
     const read = await fs.readFile(file, 'utf-8');
     console.log(read);
     

   }catch{
        throw new Error('FS operation failed');
   }
};

await read();