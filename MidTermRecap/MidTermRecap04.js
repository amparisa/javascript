function totalValume(){
    let sum = 0;
    let tmp = 1;
    for (let i = 0; i < arguments.length; i++) {
        for (let j= 0; j < arguments[i].length; j++) {
            tmp = tmp * arguments[i][j];
        }
        sum  += tmp;
        tmp = 1;
    }
    return sum ;
}
console.log(totalValume([4,2,4],[3,3,3],[1,1,2],[2,1,1]))
console.log(totalValume([2,2,2],[2,1,1]))
console.log(totalValume([1,1,1]))