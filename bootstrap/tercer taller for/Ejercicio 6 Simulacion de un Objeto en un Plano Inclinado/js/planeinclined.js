/* Ejercicio: Calculo de la Fuerza de Friccion
Fecha: 28 de sept 2025
Autor: JeffersonAO
*/
function planeInclined() {
	let mass;
	let angleRange;
	let cont;
	let num;
	let gravity = 9.8;

	num = parseInt(document.getElementById("num").value);
	for (cont = 0; cont < num; cont++) {

		let mass = parseFloat(document.getElementById("mass").value);
		let angleRange = parseFloat(document.getElementById("angleRange").value);

		let fParalela = mass * gravity * angleRange;
		document.getElementById("fParalela").innerHTML += "the force parallel for the surface of an inclined plane is " + fParalela + " Newtons<br>";
	}
}
console.log(planeInclined());