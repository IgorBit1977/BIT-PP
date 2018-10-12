
//2 Write a program that checks if a given number is odd.

var num = 16;
var result;
if (num % 2 === 0) {
    result = "even";
} else {
    result = "odd";
}
console.log(result);

//3 Write a program that checks if a given number is a three digit long number.

var number = 259;

if (number >= 100 && number < 1000) {
    console.log(number);
}

//4

var niz = [7, 2, 4, 7, 7, 8, 7, 7, 1, 7];
var len = niz.length;
var sum = 0;
var mean;

for (var i = 0; i < len; i++) {
    sum += niz[i];
}

mean = sum / len;
console.log(mean);

//7 Write a program that calculates a number of digits of a given number. 
var num = 9685;

var result = "" + num;
console.log(result.length);

//8 Write a program that calculates a number of appearances of a given number in a given array.

var a = [7, 2, 4, 7, 7, 8, 7, 7, 1, 7];
var e = 7;
var len = a.length - 1;
var res = 0;

while (len >= 0) {
    if (a[len] == e) {
        res++;
    }
    len--;
}
console.log(res);

//9 Write a program that calculates the sum of odd elements of a given array. 

var arr = [12, 13, 3, 9, 2];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        sum += arr[i];
    }
}
console.log(sum);

//10

var str = "Nesto sto treba da izracunamo! A ovo je dodatak.";
var sum = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
        sum++;
    }
}
console.log(sum);

//11

var str = "";
var num = 4;
for (var i = 1; i <= num; i++) {
    str += "abc";
}
console.log(str);

/*
Write a program that inserts a given element e on the given 
position p in the array a. If the value of the position is 
greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8];
var i;
var res;
var temp;

if (p > a.length) {
    console.log("Position larger than array length!");
} else {
    for (i = a.length; i > p; i--) {
        temp = a[i];
        a[i] = a[i - 1];
        a[i - 1] = temp;
    }
    a[p] = e;
}
console.log(a);
