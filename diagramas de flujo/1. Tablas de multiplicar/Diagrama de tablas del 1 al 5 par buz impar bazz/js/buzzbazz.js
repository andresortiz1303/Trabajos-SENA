/* Ejercicio: Diagrama de tablas del 1 al 5 par buz impar bazz
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

let tab=0;
let tabF=5;
let cont=0;
let num=5;
let mult;


while (tab < tabF){
	
	cont = 0
	tab = tab + 1

	while (cont < num){
		cont = cont + 1;
		mult = tab * cont;

	if (mult%2==0){
	value = "bazz"
	} else {
	value = "buzz"
	}

	console.log(tab+ "x" +cont+ "=" +mult);
	console.log(value);
	
	}
}