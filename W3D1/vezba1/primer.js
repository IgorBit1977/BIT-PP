function sum(a, b) {
  return a + b;
}
var result;
result = sum(3, 5);
console.log(result);

var sum; /// anonimna funkcija
sum = function(a, b) {
  return a + b;
};
var result;
result = sum(3, 5);
console.log(result);
console.log(typeof sum); // vraca function.
