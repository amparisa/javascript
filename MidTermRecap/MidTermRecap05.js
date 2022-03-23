Array.prototype.sum = function (prop){
    var total = 0 ;
    for ( var i = 0 ,_len = this.length ; i < _len ; i++){
        total += this[i][prop]
    }
    return total
}
var getBudgets = [
    { name: "John" ,age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin" ,age: 16, budget: 2700 }
    ];
console.log(getBudgets.sum("budget"))
var getBudgets = [
    { name: "John",age: 21, budget: 29000 },
    { name: "Steve" ,age: 32, budget: 32000 },
    { name: "Martin",age: 16, budget: 1600 }
    ];
console.log(getBudgets.sum("budget"))