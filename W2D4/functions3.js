//1

var arr = [3, 500, 12, 149, 53, 414, 1, 19];

function minmax(a) {
  var min = 0;
  var max = 0;
  var minind, maxind;
  var tmp, tmpind;
  for (var i = 1; i < a.length; i++) {
    if (min > a[i]) {
      min = a[i];
      minind = i;
    }
    if (max < a[i]) {
      max = a[i];
      maxind = i;
    }
  }
  tmpind = minind;
  tmp = a[minind];
  minind = maxind;
  a[minind] = a[maxind];
  maxind = tmpind;
  a[maxind] = tmp;
  return a;
}

var niz = minmax(arr);
console.log(arr);
console.log(niz);
