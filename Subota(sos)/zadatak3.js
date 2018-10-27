// Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

function ubaciSlovoNaIndex(string, index, letter) {
  var niz = [];
  niz = string.split("");
  niz.splice(index - 1, 0, letter);
  var resenje = niz.join('');
  console.log(resenje);
}
ubaciSlovoNaIndex("Goo morning", 4, "d");
