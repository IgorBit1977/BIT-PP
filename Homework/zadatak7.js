// 7. Write a function that prints out number of input arguments of the function.

function howManyArguments(one, two) {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum = arguments[i];
    }
    return sum;
}
var result = howManyArguments(1, 2, 3, 4, 5);
console.log(result);