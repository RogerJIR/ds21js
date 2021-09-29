//Iglesias Rolón Rogelio de Jesús 3F

var array = [], pasos, aux, min;

//BURBUJA
console.log("BURBUJA");
for (cont=0; cont<10; cont++) {
	
	console.log("Corrida #"+(cont+1))
	
	pasos = 0;
	
	//Asignación y llenado del arreglo
	for (i=0; i<10000; i++) {
		array[i] = parseInt(Math.random()*10000);
	}
	
	//Metodo Burbuja
	console.time("El tiempo fue");
	
	for (var i=0; i<array.length; i++) {
		for (var j=0; j<array.length-1; j++) {
			if (array[j] > array[j+1]) {
				aux = array[j];
				array[j] = array[j+1];
				array[j+1] = aux;
				
				pasos++;
			}
		}
	}
	
	console.timeEnd("El tiempo fue");
	console.log("Los pasos fueron: "+pasos+"\n");
}

//SELECCIÓN
console.log("SELECCIÓN");
for (cont=0; cont<10; cont++) {
	
	console.log("Corrida #"+(cont+1))
	
	pasos = 0;
	
	//Asignación y llenado del arreglo
	for (i=0; i<10000; i++) {
		array[i] = parseInt(Math.random()*10000);
	}
	
	//Metodo Selección
	console.time("El tiempo fue");
	
	for (var i=0; i<array.length; i++) {
		min = i;
		
		for (var j=i+1; j<array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
				
				pasos++;
			}
		}
		
		aux = array[i];
		array[i] = array[min];
		array[min] = aux;
	}
	
	console.timeEnd("El tiempo fue");
	console.log("Los pasos fueron: "+pasos+"\n");
}