/* Ejercicio: Calculo de la Fuerza Resultante (Segunda Ley de Newton)
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

let force;
let aceleration;
let mass;
let num = prompt("numero ", );
let cont;


for(cont=0;cont<num;cont++){
	mass = prompt("masa ", );
	aceleration = prompt("aceleration: ", );
	force = mass * aceleration;
	

	console.log("resultant force: " +force);

}
	console.log("the number of calculations is " +cont);