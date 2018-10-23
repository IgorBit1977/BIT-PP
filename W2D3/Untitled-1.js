var rec = "AAautomehanicaraaaaaa";
var suma = 0;
var sumA = 0;

for (var i = 0; i < rec.length; i++) {
  if (rec[i] == "a") {
    suma += 3;
  }
  if (rec[i] == "A") {
    sumA += 5;
  }
}
console.log(suma, sumA);
