// Iglesias Rolón Rogelio de Jesús 3°F

//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements

var n, a, b, c;

n = parseInt(prompt("Ingresa la cantidad de números a mostrar: "));

Fibonacci(n);

function Fibonacci(n) {
  a = 1;
  b = 0;
  c = 0;

  for (var i = 0; i < n; i++) {
    console.log(c);
    
    c = a + b;

    a = b;
    b = c;
  }
}