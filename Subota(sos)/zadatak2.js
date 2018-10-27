//Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”


//ToDo
function replace(string) {
    var niz = [];
    niz = string.split('JS');
    niz = niz.join('**');
   return niz;
}
var finish = replace('Programming in JS is super interesting! JS');
console.log(finish);
