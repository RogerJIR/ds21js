/*
Iglesias Rolón Rogelio de Jesús 

PROBLEM 2
posorder(n)

traverses a tree in POSORDER
@arg {tree} n - tree

@example
posorder(root)
*/

//Definir la estructura de datos
function Node(obj) {
    this.data = obj;  
    this.left = null; 
    this.right = null;
}
//Definir los nodos
let a = new Node('+');
let b1 = new Node(24);
let b2 = new Node(25);
//Asignar los hijps
a.left = b1;
a.right = b2;

console.log("Posorder");
posorder(a); //Llamar a la función Posorder
function posorder(n) {
    if (n!==null) {
        posorder(n.left);
        posorder(n.right);
        console.log(n.data);
    }
}