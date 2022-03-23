function isValidIP(str)
{
    str = str.split('.');
    if (str.length == 4){
        for(var i = 0; i < str.length; i++){
            if((str[i] < 1)||(str[i] > 255)){
                return false;
            }
            var zero = str[i].split('');
            if (zero[0] == 0){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));