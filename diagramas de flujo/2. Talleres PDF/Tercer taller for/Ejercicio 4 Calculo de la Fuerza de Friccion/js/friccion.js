/* Ejercicio: Calculo de la Fuerza de Friccion
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

let mass;
let coeFriction;
let forceFriction;
let cont;
let num;

num = prompt("Enter number ", );
for(cont=0;cont<num;cont++){
	
	mass = prompt("Enter mass ", );
	coeFriction = prompt("Enter coefficient of friction", );
	
	forceFriction = mass * coeFriction;
	console.log("The friction force is: " +forceFriction);
}
