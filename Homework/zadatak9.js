// 9. Write a function that replaces all white spaces from string with dash (-). 

var string = "How a lovely evening";
function replaceAllWhites(input) {
    for (var i = 0; i < string.length; i++) {
        var character = string[i];
        if (character == " ") {
            character = "-";

        }
        console.log(character);
    }
}
replaceAllWhites(string);