/* Ejercicio:Cálculo de la Fuerza con la Segunda Ley de Newton
Fecha: 23 de sept 2025
Autor: JeffersonAO
*/


function forceTotal() {

	let mass = 1;
	let acceleration = 1;
	let total = 0;
	let count = 0;



	while (mass > 0 && acceleration > 0) {



		if (mass > 0 && acceleration > 0) {

			mass = parseInt(document.getElementById("mass").value);
			acceleration = parseInt(document.getElementById("acceleration").value);

			if (isNaN(mass) || isNaN(acceleration)) {
				alert("Error: debes ingresar un número.");
				return;
			}

			if (mass === 0 || acceleration === 0) {
				alert("Proceso terminado. No se aceptan fuerzas iguales a cero.");
				return;
			}

			if (mass < 0 || acceleration < 0) {
				alert("Error: la fuerza no puede ser negativa.");
				return;
			}

			let force = mass * acceleration;
			total = total + force;
			count = count + 1;

			document.getElementById("force").innerHTML += "force: " + force + "<br>";


		} else {
			alert("error, los numeros son negativos");
		}

		document.getElementById("total").innerHTML += "La suma total de las fuerzas es: " + total + "<br>";
		document.getElementById("count").innerHTML += "La cantidad de calculos realizados fueron: " + count + "<br>";

	}



}
console.log(force());
