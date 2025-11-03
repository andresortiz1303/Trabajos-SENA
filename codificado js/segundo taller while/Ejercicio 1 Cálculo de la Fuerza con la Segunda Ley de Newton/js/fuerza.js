/* Ejercicio:Cálculo de la Fuerza con la Segunda Ley de Newton
Fecha: 23 de sept 2025
Autor: JeffersonAO
*/


let mass=1;
let aceleration=1;
let force;
let count=0;
let total=0;


	
while(mass > 0 && aceleration > 0){
	mass=-10;
	aceleration=9;
	
	
if (mass > 0 && aceleration > 0){

	force = mass * aceleration;
	total = total + force;
	count = count + 1;

	console.log("force: " +force);
	console.log("La suma total de las fuerzas es: " +total);
	console.log("La cantidad de calculos realizados fueron: " +count);
	
	} else {
		console.log("error los numeros son negativos");
	}
    mass = -1
    aceleration  = -1
}

