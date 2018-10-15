//Zadatak 1  Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
//Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

var s = "aaaiiiiiiii";
function broj(a) {
  var sum = 0;
  var i;
  for (i = 0; i < a.length; i++) {
    if (
      a[i] == "a" ||
      a[i] == "e" ||
      a[i] == "i" ||
      a[i] == "o" ||
      a[i] == "u"
    ) {
      sum += 1;
      //kada treba da se nadje broj ponavljanja, kada se inicijalizuje sum=0 i u telu petlje ce biti sum +=1.
      //Ukoliko funkcija treba da nadje sve samoglasnike onda ce var sum="" a sum u telu petlje ce biti sum+=a[i]
      //Ukoliko bi u zadatku bilo navedeno da je potreban samo poslednji samoglasnik u stringu sum u telu petlje bi bilo sum=a[i];
    }
  }
  return sum;
}
var brojac = broj(s);
console.log(brojac);

//2.  Write a function that combines two arrays by alternatingly taking elements.
//[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
var slova = ["a", "b", "c"],
  brojevi = [1, 2, 3];
function izmena(firstArr, secondArr) {
  var i;
  var newArr = [];
  var index = 0;
  for (i = 0; i < firstArr.length; i++) {
    newArr[index] = firstArr[i];
    index++;
    newArr[index] = secondArr[i];
    index++;
  }
  return newArr;
}
var noviNiz = izmena(slova, brojevi);
console.log(noviNiz);

//3.Write a function that rotates a list by k elements.
//Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotacija(a, k) {
  var i;
  var elementK = [];
  var indeksK = 0;
  var temp = [];
  var IndeksTemp = 0;
  var sum = [];

  // [4, 5, 6]
  for (i = k; i < a.length; i++) {
    temp[IndeksTemp] = a[i];
    // temp +=  a[i];
    IndeksTemp++;
  }

  // [4, 5, 6, 1, 2, 3]

  for (i = 0; i < k; i++) {
    // elementK[indeksK] = a[i];
    // indeksK++;

    temp[IndeksTemp] = a[i]; //ovako se upisuju podaci u novi niz
    IndeksTemp++;
  }

  //   [1, 2, 3] [4, 5, 6]

  //   sum = temp + elementK;

  return temp;
}
var final = rotacija([1, 2, 3, 4, 5, 6], 3);
console.log(final);

//4. Write a function that takes a number and returns array of its digits.
function arrOfDigits(a) {
  var i;
  var sum = a + "";
  var temp = [];
  var indTemp = 0;
  for (i = 0; i < sum.length; i++) {
    temp[indTemp] = sum[i];
    indTemp++;
  }
  return temp;
}
var final = arrOfDigits(582);
console.log(final);

//5.Write a program that prints a multiplication table for numbers up to 12.
var broj1 = 3,
  broj2 = 4;
function tablicaMnozenja(broj1, broj2) {
  var i;
  var j;
  var result = 0;
  var prviBroj = 0;
  var drugiBroj = 0;
  for (i = 1; i <= 3; i++) {
    prviBroj = i;
    console.log(prviBroj);
    for (j = 1; j <= 4; j++) {
      drugiBroj = j;
    }
    result = prviBroj * drugiBroj;
  }
  return result;
}
var final = tablicaMnozenja(3, 4);
console.log(final);
