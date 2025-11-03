/* Ejercicio: Calculo de la Fuerza Resultante (Segunda Ley de Newton)
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/



let force;
let num = prompt("numero ", );
//let cont;
let	mass;
let	aceleration;

function forceResul(){

for(let cont=0;cont<num;cont++){
	
	mass = prompt("masa", );
	aceleration = prompt("aceleration: ", );

	force = mass * aceleration;
	console.log("resultant force: " +force);
	}
	return num;
		
}
		
		console.log("the number of calculations is " +forceResul());
	