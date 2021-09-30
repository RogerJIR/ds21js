//Iglesias Rolón Rogelio de Jesús 3°F

// 1. DS-obj
// a. produce 1e5 random names, ie name35927
// b. add each random name into our ds-obj
// c. measure the time it took
// d. calculate the average of 7 runs

//Declaración de variables, contadores, acumuladores, objeto, arreglo
let nombres = {};
var lim = 100000;
var cont = 0;
var nombre = [];
var tiempo = 0;
//es6
const add = (key, value) => nombres[key] = value;

while (cont < 7) { //Ciclo while para las 7 corridas
  //Ciclo for para generar numeros aleatorios y asignarlos al arreglo
  for(var i = 0; i < lim; i++) {
    nombre[i] = parseInt(Math.random()*lim)+1;
  }
  //Inciciar tiempo de una corrida
  var inicio = new Date(); 
  //Añadir atributos al objeto
  for(var j = 0; j < lim; j++) {
    add((j+1), 'name'+nombre[j]);
  }
  //Finalizar el tiempo de una corrida
  var fin = new Date() - inicio; 
  //Acumulador para guardar el timpo de las corridas
  tiempo = tiempo + fin;
  //Mostrar el tiempo de cada corrida
  console.log("El tiempo de la "+(cont+1)+"° corrida es: "+fin+" ms");
  cont++;
}

console.log("El tiempo promedio es: "+(tiempo/7)+" ms");