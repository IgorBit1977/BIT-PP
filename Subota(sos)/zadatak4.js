// Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”
function deleteGivenPosition(string, position) {
  var niz = [];
  niz = string.split("");
  niz.splice(position, 1);
  var opetString = niz.join("");
  return opetString;
}

var finish = deleteGivenPosition("Goodd morning!", 3);
console.log(finish);
