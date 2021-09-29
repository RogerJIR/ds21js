// count(a,k)
//
// -> a array
// -> k element to count
// <- how many elements k the array a has
// <-  print how many steps it took
// <-  print how much time it took
 
//Iglesias Rolón Rogelio de Jesús 3°F
 
//method, function, non-function solution
 
var a = [5,4,1,5,7,3,5,2,6,7,4,3,5,7,9,0,7];
var k = 5;
var n = 0;

console.time("El tiempo fue");
 
for (i = 0; i < a.length; i++) {
  if (a[i] == k) {
  	n++;
  }
}

console.timeEnd("El tiempo fue");
console.log("El número de pasos fue: "+i);
console.log("El número "+k+" se repite "+n+" veces");