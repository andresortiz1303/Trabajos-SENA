/* Ejercicio: Calculo de la Fuerza Resultante (Segunda Ley de Newton)
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/
function resultantForce() {
	
	let acceleration = 9.8;


	let num = parseInt(document.getElementById("num").value);

	for (let cont = 0; cont < num; cont++) {
		if (forceApplied <= 0) {
			output.innerHTML += `Iteración ${cont + 1}: el objeto está en reposo<br>`;
		} else {
			output.innerHTML += `Iteración ${cont + 1}: el objeto está en movimiento<br>`;
		}
	}
}

console.log ("Fuerza resultante: " + resultantForce());