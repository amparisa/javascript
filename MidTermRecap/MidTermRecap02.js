function HighestDigit(number) {
    number = 0 | number ;
    var max=-1, remainder=-1;
    do {
      remainder = number % 10;
      max = (max > remainder ) ? max : remainder ;
      number=(number-remainder)*1e-1;
    } while (number!=0);
    return max;
}
console.log(HighestDigit(379))
console.log(HighestDigit(2))
console.log(HighestDigit(377401))