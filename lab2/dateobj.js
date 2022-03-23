const start = Date.now();
console.log('strating timer...');
setTimeout(() => {
    const millis = Date.now()-start;
    console.log(`Eseconds elapsed = ${Math.floor(millis / 1000)}`);
    
}, 2000);