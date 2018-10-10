// ZADATAK 1 - da i je niska palindrom

var s = "anavolimilovana";

//dva brojaca - od pocetka i kraja niske, na sredini niske se prekida brojac
//napraviti reverse nisku i onda uporediti dve niske

var i;
var j;
var palindrom = true;

for (i = 0, j = s.length - 1; pal && i < j; i++, j--) {
  //jedna petlja sa dva brojaca
  //pal && i < j - uslov mora biti ovakav da bi kod radio
  if (s[i] != s[j]) {
    palindrom = false;
    break; //za zaustavljanje petlje ako je uslov ispunjen
  }
}
if (palindrom == true) {
  console.log("String is palindrom.");
} else {
  console.log("String is not palindrom.");
}

//
for (i = 0; i < 6; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// palindrom sa reverse array

var s = "javascript";
var reverse = "";
var i;

for (i = 0; i < s.length; i++) {
  reverse += s[s.length - 1 - i];
}
console.log("s: " + s);
console.log("reverse: " + reverse);
console.log("isti su");
//console.log(reverse);
//
var s = "abba";
var i = 0;
var j;
var rev = "";

for (j = s.length; j <= i; j--) {
  rev = rev[j];
  console.log(rev);
}
if (rev == rev[j]) {
  //console.log("String is palindrom");
} else {
  //console.log("string is not palindrom");
}
// CONTINUE komanda - u odnosu na break ne prekida vec preskace (jump naredba)

for (i = 0; i < 6; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
