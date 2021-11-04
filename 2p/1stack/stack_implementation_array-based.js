//Iglesias Rolón Rogelio de Jesús 3F 

//INSTRUCTIONS
//create one file by program
//implement a method, function, non-function solution
//solve each as requested 
//may use code from previous exercises

//PROBLEM 1
//Stack implementation (array-based)

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

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

var nombres = new Stack();

nombres.push("Jesús");
nombres.push("Fernanda");
nombres.push("Vladimir");
console.log("Longitud: " + nombres.length());
console.log(nombres.peek());

var popped = nombres.pop();
console.log("El elemento que sale es: " + popped);
console.log(nombres.peek());

nombres.push("Rogelio");
console.log(nombres.peek());

nombres.clear();
console.log("Longitud: " + nombres.length());
console.log(nombres.peek());

nombres.push("María");
console.log(nombres.peek());