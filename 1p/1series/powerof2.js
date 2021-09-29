//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n

var n;

n = parseInt(prompt("Ingresa un número: "));

Power2(n);

function Power2(n) {
  for (var i = 0; i < n; i++) {
    console.log(Math.pow(2, i));
  }
}