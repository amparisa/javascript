const equation = (value,convert) =>{
    let s = value.split(" ");
    let total = convert(s[0]);
    for (let n=1;n<s.length;n++) {
        if(s[n] == '+') total += convert(s[n+1]);
        if(s[n] == '-') total -= convert(s[n+1]);
        if(s[n] == '*') total *= convert(s[n+1]);
        if(s[n] == '/') total /= convert(s[n+1]);
    }
    return total;
}
const convert = (text) => {
    Number.isNaN(Number.parseInt(text));
    let number=0;
    if((text == 'one')) number = 1;
    else if((text == 'two')) number = 2;
    else if((text == 'three')) number = 3;
    else if((text == 'four')) number = 4;
    else if((text == 'five')) number = 5;
    else if((text == 'six')) number = 6;
    else if((text == 'seven')) number = 7;
    else if((text == 'eight')) number = 8;
    else if((text == 'nine')) number = 9;
    else if((text == 'zero')) number = 0;
    return number;
}
console.log("one + one = "+equation('one + one',convert));
console.log("seven * four - two = "+equation('seven * four - two',convert));
console.log("one + one + one + one + one = "+equation('one + one + one + one + one',convert));