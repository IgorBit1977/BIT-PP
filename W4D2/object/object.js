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

//3
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
function isOddElementsNumber(array) {
  if(array.length % 2 == 1 ) {
    console.log('Array element number is odd')
  } else {
    console.log('Array element number is even')
  }
}
isOddElementsNumber([1,2,9,2]);

// Write a function that counts the number of elements less than the middle element.
//  If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4
function findMiddleElementInOddElementArray(array){
  if(array.length%2==0) {
    return "Error";
  } else {
  var index = (array.length - 1)/2; //index elementa dobijen na ovaj nacin
  var counter=0;
  var num = array[index];
    for(var i=0; i<array.length; i++) {
      if(array[i]<num) {
        counter++;
      }
    }
  }
  return counter;
}
 var final = findMiddleElementInOddElementArray([-1, 8.1, 3, 6, 2.3, 44, 2.11]);
 console.log(final);


 4.  //Write a function that finds the smallest element of a given array.
    //The function should return an object that contains the smallest value and its last position in the array.
    //Input: [1, 4, -2, 11, 8, 1, -2, 3]
    //Output:  { minValue: -2, minLastIndex: 6 }

    function findTheSmallestElementAndPutItInAObject(array) {
     var min = array.sort(function(a,b){
        return a-b;
      })
       var minLastIndex = array.lastIndexOf(min);
    }