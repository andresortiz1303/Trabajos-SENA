/* Ejercicio: Diagrama de tablas del 1 al 5 par e impar 
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/


function parImpar() {
	let tab = 0;
	let tabF = 5;
	let cont = 0;
	let num = 5;
	let mult;
	let cont1 = 0;
	let cont2 = 0;

	while (tab < tabF) {

		cont = 0;
		tab = tab + 1;
		if (tab == 1) {
			while (cont < num) {
				cont = cont + 1;
				mult = tab * cont;
				let value;
				if (mult % 2 == 0) {
					value = "Par"
					cont1 = cont1 + 1;
				} else {
					value = "Impar"
					cont2 = cont2 + 1;
				}
				document.getElementById("table-1").innerHTML += (tab + "x" + cont + "=" + mult + "<br>"  + value + "<br>");
			}
		}	
		if (tab == 2) {
			while (cont < num) {
				cont = cont + 1;
				mult = tab * cont;


				let value;
				if (mult % 2 == 0) {

					value = "Par"
					// document.getElementById("value").innerHTML += (value + "<br>");
					cont1 = cont1 + 1;
				} else {

					value = "Impar"
					cont2 = cont2 + 1;
					// document.getElementById("value").innerHTML += (value + "<br>");
				}
				document.getElementById("table-2").innerHTML += (tab + "x" + cont + "=" + mult + "<br>"  + value + "<br>");

			}
		}
		else if (tab == 3) {
			while (cont < num) {
				cont = cont + 1;
				mult = tab * cont;
				let value;
				if (mult % 2 == 0) {
					value = "Par"
					cont1 = cont1 + 1;
				} else {
					value = "Impar"
					cont2 = cont2 + 1;
				}
				document.getElementById("table-3").innerHTML += (tab + "x" + cont + "=" + mult + "<br>"  + value + "<br>");
			}
		}
		else if (tab == 4) {
			while (cont < num) {
				cont = cont + 1;
				mult = tab * cont;
				let value;
				if (mult % 2 == 0) {
					value = "Par"
					cont1 = cont1 + 1;
				} else {
					value = "Impar"
					cont2 = cont2 + 1;
				}
				document.getElementById("table-4").innerHTML += (tab + "x" + cont + "=" + mult + "<br>"  + value + "<br>");
			}
		}
		else if (tab == 5) {
			while (cont < num) {
				cont = cont + 1;
				mult = tab * cont;
				let value;
				if (mult % 2 == 0) {
					value = "Par"
					cont1 = cont1 + 1;
				} else {
					value = "Impar"
					cont2 = cont2 + 1;
				}
				document.getElementById("table-5").innerHTML += (tab + "x" + cont + "=" + mult + "<br>"  + value + "<br>");
			}
		}
	}

	document.getElementById("cont1").innerHTML = "Cantidad de numeros pares: " + cont1;
	document.getElementById("cont2").innerHTML = "Cantidad de numeros impares: " + cont2;
}
parImpar()