// function vraca_veci(a, b) {
//   if (a < b) {
//     console.log(b);
//   } else {
//     console.log(a);
//   }
// }
// vraca_veci(12, 8);
//
function vraca_veci(a, b) {
  var result;
  if (a < b) {
    result = b;
    return result;
  } else {
    result = a;
    return result;
  }
}
var veciBroj = vraca_veci(15, 12);
console.log(veciBroj);

//Write a program that checks if a given number is odd.

function odd_number(a) {
  var result = true;
  if (a % 2 != 0) {
    return result;
  } else {
    result = false;
    return result;
  }
}
var oddN = odd_number(9);
console.log(oddN);

//Write a program that checks if a given number is a three digit long number.

function da_li_je_broj_trocifren(a) {
  var result = "";
  if (a >= 100 && a <= 999) {
    result = "broj je trocifren";
  } else {
    result = "broj nije trocifren";
  }
  return result;
}
var broj = da_li_je_broj_trocifren(566);
console.log(broj);

//Write a program that calculates an arithmetic mean of four numbers.

function ar_mean(a, b, c, d) {
  var result = (a + b + c + d) / 4;
  return result;
}
var brojevi = ar_mean(5, 5555, 6, 4);
console.log(brojevi);

// Write a program that calculates a number of digits of a given number.
function brojCifara(broj) {
  broj += " ";
  var result = broj.length - 1;
  return result;
}
rezultat = brojCifara(123498796);
console.log(rezultat);

//Write a program that calculates a number of appearances of a given number in a given array.

function brojPonavljanja(array, trazeniBroj) {
  var result = 0;
  //   var array = [2, 4, 7, 8, 7, 7, 1];
  //   var trazeniBroj = 7;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == trazeniBroj) {
      result = result + 1;
    }
    //console.log(result);
  }
  return result;
}
var promenljiva = brojPonavljanja([2, 4, 7, 8, 7, 7, 1], 7);
console.log(promenljiva);

//Write a program that calculates the sum of odd elements of a given array.

function brojSvihNeparnih(niz) {
  var result = 0;
  for (var i = 0; i < niz.length; i++)
    if (niz[i] % 2 != 0) {
      result = result + niz[i];
    }
  return result;
}
var konacni_rez = brojSvihNeparnih([1, 5, 9, 6, 45, 43]);
console.log(konacni_rez);

//Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.
function brojia(string) {
  var result = 0;
  for (var i = 0; i <= string.length - 1; i++) {
    if (string[i] == "a" || string[i] == "A") {
      result += 1;
    }
  }
  return result;
}
var r = brojia("aaaAAA");
console.log(r);
//Write a program that concatenates a given string given number of times.
//For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function nadovezivanje(string, number) {
  var result = "";
  for (var i = 1; i <= number; i++) {
    result += string;
  }
  return result;
}
var w = nadovezivanje("jelena ", 2);
console.log(w);
