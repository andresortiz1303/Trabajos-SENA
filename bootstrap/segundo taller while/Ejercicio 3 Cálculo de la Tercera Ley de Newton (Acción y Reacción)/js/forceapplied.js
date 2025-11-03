/* Ejercicio:Cálculo de la Tercera Ley de Newton (Acción y Reacción)
Fecha: 24 de sept 2025
Autor: JeffersonAO
*/
	let cont = 0;
	let suma = 0;

function Applied() {
	// let forceApplied=1;


	// while (forceApplied > 0) {

	let forceApplied = parseFloat(document.getElementById("forceApplied").value);

	

	if (isNaN(forceApplied) || forceApplied <= 0) {
		alert("Error: la fuerza debe ser un número positivo.");
		return;
	}

	if (forceApplied === 0) {
    alert("Proceso terminado. No se aceptan fuerzas iguales a cero.");
    return;
  }

  if (forceApplied < 0) {
    alert("Error: la fuerza no puede ser negativa.");
    return;
  }
	suma = suma + forceApplied;
	cont = cont + 1;
	
	document.getElementById("suma").innerHTML = "La fuerza de reacción es: " + suma + " N";
	document.getElementById("cont").innerHTML += " <br>La cantidad de calculos son: " + cont;


	

	// }
}
console.log(Applied());