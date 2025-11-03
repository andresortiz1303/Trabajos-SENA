/* Ejercicio: Calculo del Peso de un Objeto en Diferentes Planetas
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/


let mass;
let gEarth=9.8;
let gMars=3.7;
let gJupiter=24.8;
let gMoon=1.6;
let num=prompt("ingrese numero", );
let cont;
let planet;
let earth=1;
let mars=2;
let jupiter=3;
let moon=4;

for(cont=0;cont<num;cont++){
	
	mass = prompt("ingrese masa", )
	
	planet = prompt("Planeta", );
	


	
	if (planet == 1){
	weight = mass * gEarth
	console.log("the weight on earth is: = " +weight)
	} else if (planet == 2){
	weight = mass * gMars
	console.log("the weight on mars is: = " +weight) 
	} else if (planet == 3) {
	weight = mass * gJupiter
	console.log("the weight on jupiter is: = " +weight)
	} else if (planet == 4) {
	weight = mass * gMoon
	console.log("the weight on moon is: = " +weight)
	}
}
	