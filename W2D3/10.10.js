var n = 5;
var s = "";
for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
    if (j == i || i + j == n - 1) {
      s = s + "*";
    } else {
      s = s + " ";
    }
  }
  console.log(s);
}
