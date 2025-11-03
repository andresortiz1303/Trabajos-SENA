/* Ejercicio:Cálculo de la Tercera Ley de Newton (Acción y Reacción)
Fecha: 24 de sept 2025
Autor: JeffersonAO
*/


let forceApplied=1;
let cont=0;
let suma=0;


while(forceApplied > 0){
	
	forceApplied = prompt("Ingrese fuerza", );
	
	
	if (forceApplied > 0){
	
	suma = suma + forceApplied;
	cont = cont + 1;
	
	
	console.log("la suma de fuerzas es: " +suma);
	console.log("La cantidad de calculos son: " +cont);
	} else {
		console.log("Error, la fuerza es cero");
		
	}
	
}