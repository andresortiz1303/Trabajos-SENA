/* Ejercicio: Calculo de la Fuerza de Friccion
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/
function forceFriction() {

	let cont;
	let num = parseInt(document.getElementById("num").value);


	for (cont = 0; cont < num; cont++) {

		let mass = parseInt(document.getElementById("mass").value);
		let coeFriction = parseFloat(document.getElementById("coeFriction").value);

		let forceFriction = mass * coeFriction;
		document.getElementById("forceFriction").innerHTML += "The friction force is: " + forceFriction + " NEWTONS<br>";
	}
}

console.log(forceFriction());