// 4. Write a function that checks if the first and the last element in the array or string are the same.

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
function firstEqualsLast(input) {
    if (input[0] == input[input.length - 1]) {
        return "first element: " + input[0] + " and last element: " + input[input.length - 1] + " are equal";
    } else {
        return "first element: " + input[0] + " and last element: " + input[input.length - 1] + " are not equal";
    }
}
var result = firstEqualsLast(array);
console.log(result);