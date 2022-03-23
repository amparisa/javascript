function callback (){
    console.log('Timeout Completed');
}
    
console.log('Start')
setTimeout(callback,3000); // wait 3 seconds
console.log('End' )