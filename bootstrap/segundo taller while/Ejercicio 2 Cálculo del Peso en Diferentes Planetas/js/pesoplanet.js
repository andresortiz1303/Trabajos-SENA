/* Ejercicio:Cálculo del Peso en Diferentes Planetas
Fecha: 23 de sept 2025
Autor: JeffersonAO
*/


function weightPlanet() {
	let cont = 0;
	let sum = 0;
	// let contMass=0;
	// let mass = 1;
	const gTierra = 9.81;
	const gMarte = 3.71;
	const gJupiter = 24.79;
	// let earth = 1;
	// let mars = 2;
	// let jupiter = 3;
	// let peso;
	let w = 0;
	

	// while (mass > 0) {
		
		let mass = parseInt(document.getElementById("mass").value);
		let planet = parseInt(document.getElementById("planet").value);

		if (isNaN(mass) || mass <= 0) {
    	alert ("Error: la masa debe ser un número positivo.");
    	return;
		}

		if (mass > 0) {
			if (planet == 1) {
				w = mass * gTierra
				document.getElementById("w").innerHTML += "El peso en la Tierra es: " + w + "<br>";
			} if (planet == 2) {
				w = mass * gMarte;
				document.getElementById("w").innerHTML += "El peso en Marte es: " + w + "<br>";
			} if (planet == 3) {
				w = mass * gJupiter;
				document.getElementById("w").innerHTML += "El peso en Jupiter es: " + w + "<br>";
			}
			sum = sum + w;
			cont = cont + 1;

			document.getElementById("cont").innerHTML += "Numero de calculos realizados: " + cont + "<br>";
			document.getElementById("sum").innerHTML += "La suma de las masas es: " + sum + "<br>";
		}
		
		

	// }
}
console.log(weightPlanet());