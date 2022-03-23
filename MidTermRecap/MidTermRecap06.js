function removeDup (){
    let text = [];
    let count = 0;
    for (let i = 0; i < arguments[0].length; i++) {
        for (let j = i + 1; j< arguments[0].length;j++) {
            if (arguments[0][i] == arguments[0][j] && arguments[0][j] != -999) {
                arguments[0][j] = -999;
            }
        }
    }
    for (value in arguments[0]) {
        if (arguments[0][value] != -999) {
            text[count] = arguments[0][value];
            count++;
        }
    }
    return text;
}
console.log(removeDup([1,0,1,0]))
console.log(removeDup(["the","big","cat"]))
console.log(removeDup(["John","Taylor","John"]))