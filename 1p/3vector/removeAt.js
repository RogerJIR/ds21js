/*
Iglesias Rolón Rogelio de Jesús 3°F

PROBLEM 2
removeAt(p)

removes value at position p
@arg {number} p - position

@example
removeAt(3)
*/

var arreglo = [1,2,3,4,5,6,7,8,9,10]

console.log("El arreglo original es: "+arreglo);

var p = parseInt(prompt("Ingresa la posición que deseas borrar: "));

if(p > arreglo.length) {
  console.log("Error");
} else {
  arreglo.splice((p-1), 1);

  console.log("El arreglo nuevo es: "+arreglo);
}