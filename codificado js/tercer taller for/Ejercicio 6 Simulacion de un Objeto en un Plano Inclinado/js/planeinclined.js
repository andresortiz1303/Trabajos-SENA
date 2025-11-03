/* Ejercicio: Calculo de la Fuerza de Friccion
Fecha: 28 de sept 2025
Autor: JeffersonAO
*/

let mass;
let angleRange;
let cont;
let num;
let gravity=9.8;

	num = prompt("numero de calculos", );
for(cont=0;cont<num;cont++){

	mass = prompt("Enter mass", );
	angleRange = prompt("Enter angel of range", );
	
	fParalela = mass * gravity * angleRange;
	console.log("the force parallel for the surface of an inclined plane is " +fParalela+ " Newtons")
}