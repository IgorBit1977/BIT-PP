// 1 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

var s = ["1", "21", undefined, "42", "1e+3", Infinity];
function convert(niz) {
  var n = [];
  for (var i = 0; i <= s.length; i++) {
    n = s[i] * 1;
    //console.log(n);
    if (n != undefined && n != Infinity) {
      console.log(n);
    }
  }
  return n;
}
var resenje = convert(s);
console.log(resenje);

//2 Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false-2247”
var niz;
