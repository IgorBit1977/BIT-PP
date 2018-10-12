// Use the following array to make a new one by dividing its values by two and
//  adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

var a = [3, 500, -10, 149, 53, 414, 1, 19];
var i;
function promeniNiz(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] / 2 + 5;
    if (arr[i] == 0) {
      arr[i] = 20;
    }
  }
  return arr;
}
var niz = promeniNiz(a);
console.log(niz);

// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ],
//  [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points
//  and failed to complete the exam.
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.

var studenti = [
  "Micahel",
  "Anne",
  "Frank",
  "Joe",
  "John",
  "David",
  "Mark",
  "Bill"
];
var bodovi = [50, 39, 63, 72, 99, 51, 83, 59];

function ispitneOcene(ime, bodovi) {
  var i;
  var ocena = 0;

  if (bodovi <= 50) {
    ocena = 5;
  } else if (bodovi > 50 && bodovi <= 60) {
    ocena = 6;
  } else if (bodovi > 60 && bodovi <= 70) {
    ocena = 7;
  } else if (bodovi > 70 && bodovi <= 80) {
    ocena = 8;
  } else if (bodovi > 80 && bodovi <= 90) {
    ocena = 9;
  } else if (bodovi > 90 && bodovi <= 100) {
    ocena = 10;
  }
  console.log(ime + ": Vasa ocena je :" + ocena);
}

for (i = 0; i < studenti.length; i++) {
  ispitneOcene(studenti[i], bodovi[i]);
}

ispitneOcene("Michael", 50);

// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts
// all the odd numbers 1 to 500 from the calculated sum.
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000
var j;
var zbir = 0;
var zbirn = 0;
var konacno = 0;
for (var i = 1, j = 1; i <= 1000; i++, j++) {
  if (i % 2 == 0) {
    zbir = zbir + i;
  }

  if (j % 2 != 0 && j <= 500) {
    zbirn = zbirn + j;
  }
}
console.log(zbir);
console.log(zbirn);

konacno = (zbir - zbirn) * 12.5;
console.log(konacno);

// Define a 10 element array. Take the first two letters from every string
// (that has at least 2 letters) in the array and create a new string from them.
//  Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

a = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
function dvaSlova(arr) {
  var prvaDva = "";
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string" && arr[i].length >= 2) {
      var s = arr[i]; //promenjljiva koja sadrzi samo elemente niza koji prolaze if petlju
      prvaDva += s[0] + s[1];
    }
  }
  return prvaDva;
}
var rez = dvaSlova(a);
console.log(rez);

// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB
a = "Belgrade Institute of Technology";
function natraske(string) {
  for (var i = 0, j = string.length - 1; i < string.length - 1, j <= 0; i++, j--){
      
  
}
var at = natraske(a);
console.log(at);
