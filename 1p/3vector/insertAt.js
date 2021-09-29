/*
Iglesias Rolón Rogelio de Jesús 3°F

PROBLEM 1
insertAt(p,v)

inserts a value v, at position p, in the array
@arg {number} p - position
@arg {number} v - value

@example
insertAt(3,3)
Verify operation result by outputing the array before and after
*/

var arreglo = [1,2,3,4,5,6,7,8,9,10]

console.log("El arreglo original es: "+arreglo);

var p = parseInt(prompt("Ingresa la posición que deseas modificar: "));
var v = parseInt(prompt("Ingresa el nuevo valor: "));

if(p > arreglo.length) {
  console.log("Error");
} else {
  arreglo.splice((p-1), 1, v);

  console.log("El arreglo nuevo es: "+arreglo);
}