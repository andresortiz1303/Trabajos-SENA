/* Ejercicio: Calculo de la Tensión en una Cuerda
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

let mass;
let gravity=9.8;
let tension 
let cont;
let num;

num = prompt("Enter number of calculations", )
for(cont=0;cont<num;cont++){

	mass = prompt("Enter mass", );
	
	tension = mass * gravity;
	console.log("The tension of the string is: " +tension+ " Newtons")
}