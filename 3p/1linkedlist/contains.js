//Iglesias Rolón Rogelio de Jesús 

function Node(data) { 
   this.data = data
   this.next = null
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;

console.log('n1.next: ',n1.next);

const traverse=(n)=>{
    let c=n //iterator 
    while(c){ //exists
        console.log(c.data)
	c=c.next
    }
}

traverse(n1);