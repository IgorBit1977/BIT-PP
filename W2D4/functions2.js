//1

function stringOrNot(s) {
  if (typeof s === "string") {
    return true;
  } else {
    return false;
  }
}

//2

function isBlank(s) {
  if (typeof s === "string" && (s === "" || s === " ")) {
    return true;
  } else {
    return false;
  }
}

var str1 = isBlank("bilo sta");
console.log(str1);

//3

function concatenate(a, b = 1) {
  var s = "";
  for (var i = 0; i < b; i++) {
    s += a;
  }
  return s;
}

var nesto = concatenate("ha", 3);
console.log(nesto);

//4

function occurrences(s, l) {
  var sum = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === l) {
      sum++;
    }
  }
  return sum;
}

var sum = occurrences("Neki random string sa puno slova n.", "n");
console.log(sum);

//5

function firstOccurr(s, c) {
  var index;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === c) {
      index = i + 1;
      break;
    }
  }
  if (index) {
    return index;
  } else {
    return -1;
  }
}

var strrring = firstOccurr("Hajmo na kupanje", "H");
console.log(strrring);

//6

function lastOccurr(s, c) {
  var index;
  for (var i = s.length; i >= 0; i--) {
    if (s[i] === c) {
      index = i + 1;
      break;
    }
  }
  if (index) {
    return index;
  } else {
    return -1;
  }
}

var strrring = lastOccurr("Hajdemo na kupanje", "e");
console.log(strrring);

//7

function stringToArray(s) {
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      arr[i] = null;
    } else {
      arr[i] = s[i];
    }
  }
  return arr;
}

var arr = stringToArray("String to array!");
console.log(arr);

//9

function stringToSeparated(s, sep = "-") {
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      arr[i] = sep;
    } else {
      arr[i] = s[i];
    }
  }
  return arr;
}

var arr = stringToSeparated("String to array!", "+");
console.log(arr);

//10

function getN(s, n) {
  var result = "";
  for (var i = 0; i < n; i++) {
    result += s[i];
  }
  result += "...";
  return result;
}

var res = getN("Test string!", 4);
console.log(res);

//11

var test = ["1", "21", undefined, "42", "1e+3", Infinity];
function filterOut(aos) {
  var narr = [];
  var i, ind;
  var res;
  for (i = 0, ind = 0; i < aos.length; i++) {
    res = aos[i]; //* 1;
    if (res !== undefined && res !== Infinity && res !== NaN) {
      narr[ind] = res * 1;
      ind++;
    }
  }
  return narr;
}

var res = filterOut(test);
console.log(res);

//12

function retirement(job, sex) {
  var ret = 2018 - job;
  var result;
  switch (sex) {
    case "m":
    case "M":
      result = 65 - ret;
      if (result >= 65) {
        console.log("Already retired!");
      }
      break;
    case "f":
    case "F":
      result = 60 - ret;
      if (result >= 60) {
        console.log("Already retired!");
      }
      break;
    default:
      console.log("Wrong inputs!");
  }
  return result;
}

var retired = retirement(1977, "m");
console.log(retired);

console.log(NaN != NaN);

//13

function humanize(a) {
  var n = a;
  var res;

  last_number = a % 10;
  n = n - last_number;
  switch (last_number) {
    case 1:
      if (n > 9) {
        res = a + "th";
      } else {
        res = a + "st";
      }
      break;
    case 2:
      if (n > 9) {
        res = a + "th";
      } else {
        res = a + "nd";
      }
      break;
    case 3:
      if (n > 9) {
        res = a + "th";
      } else {
        res = a + "rd";
      }
      break;
    default:
      res = a + "th";
  }

  return res;
}

function humanize(a) {
  var res;

  switch (a) {
    case 1:
      res = a + "st";
      break;
    case 2:
      res = a + "nd";
      break;
    case 3:
      res = a + "rd";
      break;
    default:
      res = a + "th";
  }
  return res;
}

var hum = humanize(111);
console.log(hum);
