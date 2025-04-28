// n should be received from main thread
import { parentPort } from "worker_threads";
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);


parentPort.on('message', (data)=> {
    try{
        const rez = nthFibonacci(data)
        parentPort.postMessage(rez);
    }catch(e){
        parentPort.postMessage(null)
        throw e;
    }
})