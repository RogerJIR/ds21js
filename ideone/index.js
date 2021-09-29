/*
INTEGRANTES

IGLESIAS ROLÓN ROGELIO DE JESÚS
RODRÍGUEZ ZAMORA RODRIGO VLADIMIR
3°F
04/Septiembre/20215
*/

//Declaración e iniciación del arreglo y las variables
var numeros = [1, 22, 3, 40, 15, 6, 27, 8, 9, 110];
var busqueda;
var posicion = 0;
//Impresión de los valores del arreglo
console.log("Los números de los arreglo son: ");
for (i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
//Solicitar al usuario el valor y guardarlo en una variable
busqueda = parseInt(prompt("Ingresa un número para buscar en el arreglo: "));
//Busqueda del número del usuario en el arreglo
for (i = 0; i < numeros.length; i++) {
  if (numeros[i] == busqueda) {
    posicion = i+1;
  }
}
//Impresión de resultados
if (posicion == 0) {
  //Mensaje de que NO se encontró el número en el array
  console.log("El número " + busqueda + " no se encuentra en el arreglo");
} else {
  //Mensaje de que SI se encontró el número en el array
  console.log("La posición del número " + busqueda + " en el arreglo es " + posicion + "°");
}