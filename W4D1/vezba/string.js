//Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

    // 12345 -> 54321
    

    // 12345
    //    21
var num = 12345;
// var string = "" + num;
// var tmp= [];
// var index = string.length-1;;
// for(var i = 0; i<string.length; i++){
//     tmp[index] = string[i];
//     index--;
// }
// console.log(tmp);
//  var result = parseFloat(tmp);
//  console.log(result);

var s = new String(num);
var sReversed = s.split('').reverse().join('');
console.log(sReversed);
// console.log(tmp);
  var result = parseFloat(sReversed);
  console.log(result);
  console.log(typeof result);

  //2 Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

var string = "Webmaster";
var s = string.toLowerCase();
console.log(s);
var array = s.split("");
array.sort(" ");
console.log(array);

//4 Write a function to alphabetize words of a given string.
//  Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

    var string = "Republic Of Serbia";
    var niz = string.split(' ');
    console.log(niz);
    for(var i =0; i<niz.length; i++){
        niz[i] = niz[i].split('').sort().join('');
    }
    console.log(niz);

//    var prvi = niz.slice(0,1);
//    var prvi1 = prvi.join(" ");
        // console.log(prvi1);
   
    // var s = niz.sort(" ");
    // console.log(s);


    //algoritam za sortiranje niza
    

    // 5. Write a function to split a string and convert it into an array of words.

    // "John Snow" -> [ 'John', 'Snow' ]
    var string = 'John Snow';
    var niz = string.split(" ");
    console.log(niz);

    //6. Write a function to convert a string to its abbreviated form. 

    // "John Snow" -> 	"John S."
var string = "John Snow";
var ind = 0;
ind = string.indexOf("S");
// console.log(ind);
var abbr = "";
for (var i = 0; i < 6; i++) {
  if (i < 5) {
    abbr = string[i];
  } else {
    abbr = string[i]+".";
  }
  console.log(abbr);
}
    
//7 Write a function that can pad (left, right) a string to get to a determined length.

	// '0000', 123, 'l' -> 0123 
    // '00000000', 123, 'r' -> 12300000
    

var string2 = '123';
var str3="";
str3=string2.padStart(4,'0');
console.log(str3);

var string11 = '123';
var result = '';
console.log(result = string11.padEnd(8, '0'));

// 8 Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"






