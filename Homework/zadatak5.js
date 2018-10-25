// 5. Write a function that checks if the two arrays are equal.
//   Assume that arrays are equal if they have all the same elements.
//   Also assume that two compared arrays have the same number of elements.

var arrayOne = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwo = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function compareArrays(firstArray, secondArray) {
  var i;
  for (i = 0; i < firstArray.length; i++) {
    if (firstArray[i] != secondArray[i]) {
      return false;
    } else {
      return true;
    }
  }
}
var result = compareArrays(arrayOne, arrayTwo);
console.log(result);
