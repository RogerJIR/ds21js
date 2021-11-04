//Iglesias Rolón Rogelio de Jesús 3F 

//INSTRUCTIONS
//create one file by program
//implement a method, function, non-function solution
//solve each as requested 
//may use code from previous exercises

//PROBLEM 1
//Stack implementation (array-based)

//Estructura de la pila
function Stack() {
    this.dataStore = []; //Estructura basada en arreglos
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
//funciones de la estructura de la pila
function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[this.top-1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}
//Definimos una nueva pila
var nombres = new Stack();
//Ingresar elementos a la pila
nombres.push("Jesús");
nombres.push("Fernanda");
nombres.push("Vladimir");
console.log("Longitud: " + nombres.length()); //Imprimir la longitud de la píla
console.log(nombres.peek()); //Mostrar el último elemento de la pila
//Sacar elemento (último) de la pila
var popped = nombres.pop(); 
console.log("El elemento que sale es: " + popped);

console.log(nombres.peek()); //Mostrar el último elemento de la pila

nombres.push("Rogelio"); //Ingresar elemento a la pila
console.log(nombres.peek()); //Mostrar el último elemento de la pila

nombres.clear(); //Limpiar la pila

console.log("Longitud: " + nombres.length()); //Imprimir la longitud de la píla
console.log(nombres.peek()); //Mostrar el último elemento de la pila

nombres.push("María"); //Ingresar elementos a la pila
console.log(nombres.peek()); //Mostrar el último elemento de la pila