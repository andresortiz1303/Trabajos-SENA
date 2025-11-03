
let tablaMatriz=[];
let multiplicar;
let tabla;


for(tabla=1;tabla<10;tabla++){
	
	let multiplicador = [];
	
for(let numero=1;numero<=10;numero++){
	multiplicar = numero * tabla;
	
	multiplicador.push(multiplicar);
	}
	tablaMatriz.push(multiplicador);
}

console.log(tablaMatriz);



//console.log(tabla+ " x " +numero+ " = " +multiplicar);
	//console.log(multiplicar);