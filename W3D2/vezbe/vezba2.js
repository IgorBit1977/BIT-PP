//Write a program that prints a multiplication table for numbers up to 12.
"use strict";
var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function tablicaMnozenja(num1, num2) {
  var i;
  var j;
  var prviMnozilac;
  var drugiMnozilac;
  var result = 0;
  for (i = 0; i < num1.length; i++) {
    prviMnozilac = num1[i];
    console.log(prviMnozilac);
    for (j = 0; j < num2.length; j++) {
      drugiMnozilac = num2[i];
      console.log(drugiMnozilac);
      result = prviMnozilac * drugiMnozilac;
    }
    result = result + "\n";
  }

  return result;
}

var finish = tablicaMnozenja(num1, num2);
console.log(finish);
