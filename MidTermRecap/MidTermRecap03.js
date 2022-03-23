function capToFont (word){
    var w = word.split("");
    var caps = [];
    var lower = [];
    for (var i = 0 ; i < word.length;i++){
        if (word[i] == word[i].toUpperCase()){              
            caps.push(word[i]);
        }
        if (word[i] ==word[i].toLowerCase()){
            lower.push(word[i]);
        }
    }
    return caps.join("").concat(lower.join(""));
}
console.log(capToFont("hApPy"))
console.log(capToFont("moveMENT"))
console.log(capToFont("shOrtCAKE"))