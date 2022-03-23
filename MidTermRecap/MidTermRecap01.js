function NumberSplit(number){
    var number = [Math.floor(number/2),Math.ceil(number/2)];
    return number;
}
console.log(NumberSplit(4))
console.log(NumberSplit(10))
console.log(NumberSplit(11))
console.log(NumberSplit(-9))