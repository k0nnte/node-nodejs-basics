const parseArgs = () => {
   const args = process.argv.slice(2); 
   
    const rez = [];
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace(/^--/, '');
        const value = args[i + 1];
        rez.push(`${key} is ${value}`);
    }
    console.log(rez);
   
};

parseArgs();