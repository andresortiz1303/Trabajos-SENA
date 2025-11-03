/* Ejercicio:Cálculo de la Fuerza con la Segunda Ley de Newton
Fecha: 11 de oct 2025
Autor: JeffersonAO
*/


let mass=1;
let aceleration=1;
//let force;

	

function calcForce(mass, aceleration){
	
	let count=0;
	let total=0;

while(mass > 0 && aceleration > 0){


		mass=prompt("masa: ", );
		aceleration=prompt("aceleracion: ", );
	
if (mass > 0 && aceleration > 0){

	let force = mass * aceleration;
	total = total + force;
	count = count + 1;
	console.log("La cantidad de calculos realizados fueron: " +count);
	return total
	} else {
		 console.log("error los numeros son negativos");
		
	}
	
    mass = -1
    aceleration  = -1
	
}
}
	
	
	console.log("La suma total de las fuerzas es: " +calcForce(mass, aceleration));