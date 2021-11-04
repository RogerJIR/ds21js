//Iglesias Rolón Rogelio de Jesús 3F 

//INSTRUCTIONS
//create one file by program
//implement a method, function, non-function solution
//solve each as requested 
//may use code from previous exercises

//PROBLEM 1
//Queue implementation (array-based)

//Estructura de la cola
function Queue() {
    this.dataStore = []; //Estructura basada en arreglos
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
//funciones de la estructura de la cola
function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }else {
        return false;
    }
}
//Definimos una nueva cola
var q = new Queue();
//Ingresar elementos a la cola
q.enqueue("Rodrigo");
q.enqueue("María");
q.enqueue("Roger");

console.log(q.toString()); //Imprimir la cola
q.dequeue(); //Eliminar el 1er elemento de la cola
console.log(q.toString()); //Imprimir la cola
console.log("Frente de la cola: " + q.front()); //Imprimir frente de la cola
console.log("Fondo de la cola: " + q.back()); //Imprimir fondo de la cola