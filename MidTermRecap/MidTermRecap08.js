function simplePair() {
    let status = false;
    let total  = [];
  
    let count = 0;
    for (let i = 0; i < arguments[0].length; i++) {
      for (let j = i + 1; j < arguments[0].length; j++) {
        if (arguments[0][i] * arguments[0][j] == arguments[1]) {
          total[count] = arguments[0][i];
          total[++count] = arguments[0][j];
        }
      }
    }
    if (total.length == 0) {
      return null;
    }
    return total;
  }
  console.log(simplePair([1, 2, 3], 3));
  console.log(simplePair([1, 2, 3], 6));
  console.log(simplePair([1, 2, 3], 9));