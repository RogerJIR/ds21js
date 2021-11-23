/* 
Iglesias Rolón Rogelio de Jesús 

PROBLEM 1
array-based implementation of trees
*/

//Definir la estructura de datos
function Node(obj){
    this.data = obj;  
    this.left = null; 
    this.right = null;
}

//Implementación en arreglos
var a = [];
//Definir los nodos
a[0] = new Node('+');
a[1] = new Node(24);
a[2] = new Node(25);
a[3] = new Node(33);
a[4] = new Node(70);
a[5] = new Node(73);
a[6] = new Node(96);
//Asignar los hijps
a[0].left = a[1];
a[0].right = a[2];
a[1].left = a[3];
a[1].right = a[4];
a[2].left = a[5];
a[2].right = a[6];

console.log("Inorder");
inorder(a[0]); //Llamar a la función Inorder
function inorder(n){
    if (n!==null){
        inorder(n.left);
        console.log(n.data);
        inorder(n.right);
    }
}