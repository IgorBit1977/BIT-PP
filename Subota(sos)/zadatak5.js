// Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]

// Output: [3, 1, 90, 23, 67]
function deleteEveryOtherElement(input) {
  for (var i = 1; i < input.length; i++) {
    input.splice(i, 1);
  }
  return input;
}
var finish = deleteEveryOtherElement([3, 5, 1, 8, 90, -4, 23, 1, 67]);
console.log(finish);

// function deleteEveryOtherElement(input){
//     var i = input.length;
//     while(i--){
//         (i % 2 ) != 0 && input.splice(i, 1);
//     }
//     console.log(input);
// }
// var finish = deleteEveryOtherElement([3, 5, 1, 8, 90, -4, 23, 1, 67]);
// console.log(finish);
