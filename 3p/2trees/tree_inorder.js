/*
Iglesias Rolón Rogelio de Jesús 

PROBLEM 1
inorder(n)

traverses a tree in INORDER
@arg {tree} n - tree

@example
inorder(root)
*/

//Definir la estructura de datos
function Node(obj){
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

console.log("Inorder");
inorder(a); //Llamar a la función Inorder
function inorder(n){
    if (n!==null){
        inorder(n.left);
        console.log(n.data);
        inorder(n.right);
    }
}