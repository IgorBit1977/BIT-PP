//perfect number

function perfect(n) {
  var sum = 0;
  for (var i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  if (sum == n) {
    return true;
  } else {
    return false;
  }

  //return sum == n;
}

for (var i = 0; i < 1000; i++) {
  if (perfect(i)) {
    console.log(i);
  }
}

//isNaN

function ourNaN(n) {
  return typeof n == "number" && n != n;
}

//2

var niz = [3, 500, -10, 149, 53, 414, 1, 19];
function noviNiz(a) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    b[i] = a[i] / 2 + 5;
    if (b[i] == 0) {
      b[i] == 20;
    }
  }
  return b;
}
var arr = noviNiz(niz);
console.log(arr);

//3

function insertAt(s1, s2, n = 1) {}

var res = insertAt("My random string!", "JS", 10);
console.log(res);

//3 3

var test = [NaN, 0, 15, false, -22, "", undefined, 47, null];
function filterOut(aos) {
  var narr = [];
  var i, ind;
  var res;
  for (i = 0, ind = 0; i < aos.length; i++) {
    res = aos[i]; //* 1;
    if (
      res !== undefined &&
      res !== Infinity &&
      !isNaN(res) &&
      res !== 0 &&
      res !== ""
    ) {
      narr[ind] = res * 1;
      ind++;
    }
  }
  return narr;
}

var res = filterOut(test);
console.log(res);

//4 3

function reverse(n) {
  var num = n;
  var last_number;
  var ind = 0;
  var arr = [];
  var resnum = 0;

  while (num != 0) {
    last_number = n % 10;
    arr[ind] = last_number;
    ind++;
    num = (num - last_number) / 10;
  }

  for (var i = 0; i < arr.length; i++) {
    resnum += Math.pow(10, i) * arr[arr.length - 1 - i];
  }
  return resnum;
}

var res = reverse(12345);
console.log(res);

//6 3

function specifiedNumber(n, val = null) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = val;
  }
  return arr;
}

var res = specifiedNumber(6, 0);
console.log(res);

//10 3

var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
function mostFrequent(a) {
  var mostmost = 0;
  var mostind;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      var most = 0;
      if (a[i] == a[j]) {
        most++;
      }
    }
    if (mostmost < most) {
      mostmost = most;
      mostind = i;
    }
    return a[i];
  }
}

var res = mostFrequent(arr);
console.log(res);
