//2 . Write a function that checks if the number is positive or negative.

function isPositive(num) {
    if (num > 0) {
        return "Number: " + num + " is positive"
    } else {
        return "Number" + num + " is negative"
    }
}
var note = isPositive(-21);
console.log(note);