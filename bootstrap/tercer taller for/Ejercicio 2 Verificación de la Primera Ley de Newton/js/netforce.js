/* Ejercicio: Verificación de la Primera Ley de Newton
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

function netForceCalculator() {



	let num = parseInt(document.getElementById("num").value);

	let forceApplied = parseInt(document.getElementById("forceApplied").value);

	for (let cont = 0; cont < num; cont++) {

		if (forceApplied <= 0) {
			document.getElementById("forceApplied").innerHTML = "the object is at rest";
		} else {
			document.getElementById("forceApplied").innerHTML = "the object is in motion";

		}
	}
}

console.log(netForceCalculator());