// 8. Write a function that sets some global variable to the new value.

var global = 2017;
function changeGlobalWithinFunction() {
    global = 2018;
    return global;
}
var result = changeGlobalWithinFunction();
console.log(result);
console.log(global);