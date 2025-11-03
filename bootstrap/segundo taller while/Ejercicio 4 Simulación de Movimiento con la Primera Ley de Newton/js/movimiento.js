/* Ejercicio:Simulación de Movimiento con la Primera Ley de Newton
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

function motion() {
	let forceApplied = 1;
	let velocity = 0;
	let distance = 0;
	let mass;
	let acceleration;

	// while (forceApplied > 0) {
	forceApplied = parseInt(document.getElementById("forceApplied").value);
	mass = parseInt(document.getElementById("mass").value);



	// if (isNaN(mass) || isNaN(acceleration)) {
	// 	alert("Error: debes ingresar un número.");
	// 	return;
	// }

	// if (mass === 0 || acceleration === 0) {
	// 	alert("Proceso terminado. No se aceptan fuerzas iguales a cero.");
	// 	return;
	// }

	// if (mass < 0 || acceleration < 0) {
	// 	alert("Error: la fuerza no puede ser negativa.");
	// 	return;
	// }

	if (forceApplied > 0) {

		acceleration = forceApplied / mass;
		document.getElementById("resultado").innerHTML += "La aceleracion del objeto es: " + acceleration + " m/s²<br>";


		velocity = (velocity + acceleration) * 1;
		document.getElementById("resultado").innerHTML += "La velocidad del objeto es: " + velocity + " m/s<br>";

		distance = velocity * acceleration;
		document.getElementById("resultado").innerHTML += "La distancia recorrida es: " + distance + " m<br>";
	}

	// }	
}
console.log("Simulación de movimiento" + motion());
