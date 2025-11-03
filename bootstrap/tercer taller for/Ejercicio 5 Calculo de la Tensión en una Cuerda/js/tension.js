/* Ejercicio: Calculo de la Tensión en una Cuerda
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

function forceTension() {

	let gravity = 9.8;

	let num = parseInt(document.getElementById("numMass").value);
	for (let cont = 0; cont < num; cont++) {

		let mass = parseFloat(document.getElementById("mass").value);

		let tension = mass * gravity;

		document.getElementById("tension").innerHTML += "The tension of the string is: " + tension + " Newtons<br>";
	}
}

console.log(forceTension());