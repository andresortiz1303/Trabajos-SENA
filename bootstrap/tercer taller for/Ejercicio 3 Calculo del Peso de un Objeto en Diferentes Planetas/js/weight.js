/* Ejercicio: Calculo del Peso de un Objeto en Diferentes Planetas
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

function weightPlanet(){

let gEarth=9.8;
let gMars=3.7;
let gJupiter=24.8;
let gMoon=1.6;
// let num= parseInt(document.getElementById("num").value);





	// for (let cont = 0; cont < num; cont++) {

		
		let mass = parseInt(document.getElementById("mass").value);
		let planet = parseInt(document.getElementById("planet").value);

		


		if (planet === 1) {
			weight = mass * gEarth
			document.getElementById("result").innerHTML += "the weight on earth is: = " + weight + "N<br>";
		} else if (planet === 2) {
			weight = mass * gMars
			document.getElementById("result").innerHTML += "the weight on mars is: = " + weight + "N<br>";
		} else if (planet === 3) {
			weight = mass * gJupiter
			document.getElementById("result").innerHTML += "the weight on jupiter is: = " + weight + "N<br>";
		} else if (planet === 4) {
			weight = mass * gMoon
			document.getElementById("result").innerHTML += "the weight on moon is: = " + weight + "N<br>";
		}
		
	// }
}
weightPlanet();