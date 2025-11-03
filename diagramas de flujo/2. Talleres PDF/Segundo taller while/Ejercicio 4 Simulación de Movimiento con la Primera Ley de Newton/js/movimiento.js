/* Ejercicio:Simulación de Movimiento con la Primera Ley de Newton
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

let forceApplied=1;
let mass;
let aceleration;
let velocity=0;
let distance=0;

	
while(forceApplied>0){
	forceApplied = prompt("Enter applied force in Newtons", )
	mass = prompt("Enter mass in kg", )
	
	if (forceApplied>0){
	
	aceleration = forceApplied / mass;
	console.log("La aceleracion del objeto es: " +aceleration+ " m/s²");
	

	velocity = (velocity + aceleration)*1;
	console.log(velocity);

	distance = velocity * aceleration;
	console.log("distance is: " +distance)
	} else { 
	console.log("la masa esta en reposo")
	forceApplied=0;	
	}
	
	
}
