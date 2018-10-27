// Write a function that checks if a given string contains digit 5.
// Input: “1b895abd” 
// Output: true


// Input: “1bser9re”
// Output: false
    var a = "1b89abd";
function checkAString(string){
    var daLiImaBrojaPet;
    daLiImaBrojaPet = a.indexOf('5');
    if(daLiImaBrojaPet != -1){
        return true;
    } else{
        return false;
    }

}
var check = checkAString(a);
console.log(check); 

