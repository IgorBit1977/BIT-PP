// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
var array = [2, 4, 7, 11, -2, 1];

var duplo = function(array) {
  var noviNiz = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    noviNiz.push(array[i], array[i]);
  }

  console.log(noviNiz);
};

duplo(array);

//Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 
var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var brisiDuplo = function (array) {
    var s = a.sort();
    var i;
    var j;
    var novi = [];
    for(i=0,j=i+1; i<s.length; i++, j++){
        if(s[i] != s[j]){
            novi.push(s[i]);
        }
    }
    console.log(novi);
}
brisiDuplo(a);
