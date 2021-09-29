// seconds
//
// how many seconds in a:
// <- year approx 10^7
// <- century
// <- millenium
 
// Rogelio de Jesús Iglesias Rolón 3°F
 
//method, function, non-function solution
let dias = 365, hor = 24, min = 60, seg = 60

let seg_a = dias*hor*min*seg
let seg_s = seg_a*100
let seg_m = seg_a*1000

console.log('En un año hay: '+seg_a+' segundos')
console.log('En un siglo hay: '+seg_s+' segundos')
console.log('En un milenio hay: '+seg_m+' segundos')