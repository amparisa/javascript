function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
    setTimeout ( resolve, ms);
    });
}

async function longRunningperation(){
    // logic
    return 42;
    }

async function run() {
    // logic
    console.log("Start!!") ;
    // try take of await and compare
    await  promiseTimeout (2000);
    //try to take await out and see
    const response = await longRunningperation();
    console. log(response);

    console.log("Stop!!") ;
}
    
console.log('Before run');
run();
console. log('After run');
