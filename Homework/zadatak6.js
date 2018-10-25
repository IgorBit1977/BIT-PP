// 6. Write a function that reverses a word or sentence. Cover cases if sentence is not provided.

var sentence = "I am a super student";
function reverseSentence(input) {
    var j;
    obrnutiString = '';
    if (input == '') {
        console.log("You must write some sentence!")
    }
    for (j = input.length - 1; j >= 0; j--) {
        var character = input[j];
        obrnutiString += character;
    }
    return obrnutiString;
}
var result = reverseSentence(sentence);
console.log(result);