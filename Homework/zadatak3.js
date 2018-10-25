// 3. Write a function that outputs array of every second character from the provided string.
// In case that string is not provided outputs array empty array. 
var string = "This is one basic string";
function everySecond(input) {
    newArray = [];
    for (var i = 0; i < string.length; i += 2) {
        var character = string[i];
        newArray += character;
    }

    if (input == "") {
        return (newArray = []);
    }
    return (newArray);
}
var result = everySecond(string);
console.log(result);