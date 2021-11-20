//Iglesias Rolón Rogelio de Jesús 

//Clase Node para crear la estructura de listas 
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
//Función Stack para crear la estructura de la pila
function Stack(n) {
    this.push = push;
    this.head = null;
}
//Función push para meter elementos en la pila
function push(element) {
    const newItem = new Node(element, this.head)
    this.head = newItem;
}
//Variables, contadores y pila
var list = new Stack();
var tamaño = 10000;
var cont = 0;
var tiempo = 0;

while (cont < 7) { //Ciclo while para las 7 corridas
    //Iniciar tiempo de una corrida
    var inicio = new Date();
    //Ciclo para meter números aleatorios en la pila
    for(var i=0;i<tamaño; i++) {
        list.push(Math.round(Math.random()*tamaño)); //Ingresamos númertos aleatoriops en la pila
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