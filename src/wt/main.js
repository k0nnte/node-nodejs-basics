import os from 'os';
import { Worker } from 'worker_threads';
import {resolve, dirname} from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const performCalculations = async () => {
    const workers = [];
    const rezults = [];
    const cpu = os.cpus().length;

    for(let i = 0; i< cpu; i++){
        const workData = 10 + i;

        const worker = new Worker(resolve(__dirname, 'worker.js'));
        worker.postMessage(workData);
        workers.push(new Promise((rez)=> {
            
            worker.on('message', (result) => {
                rezults.push({
                    status: 'resolved',
                    data: result,
                });
                rez();
            })
            worker.on('error', ()=> {
                rezults.push({
                    status: 'error',
                    data: null
                })
                rez();
            })
            worker.on('exit', (code)=> {
                if(code !== 0){
                    rezults.push({
                        status: 'error',
                        data: null
                    })
                    rez();
                }
            })
        }))

    }
    await Promise.all(workers);
    console.log(rezults);
    
   
};

await performCalculations();