/* Ejercicio: Verificación de la Primera Ley de Newton
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/


let netForce;
let forceApplied;
let cont;
let num = prompt("Ingrese cantidad de calculos", );


for(cont=0;cont<num;cont++){
		forceApplied = prompt(" Ingrese fuerza", );

		if (forceApplied > 0){
		console.log("the object is at rest")

		} else { console.log("the object is in motion")
		
		}


}
		console.log("the number of calculations is " +cont);