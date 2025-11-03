/* Ejercicio: Diagrama de tablas del 1 al 5 par e impar 
Fecha: 25 de sept 2025
Autor: JeffersonAO
*/

let tab=0;
let tabF=5;
let cont=0;
let num=5;
let mult;
let cont1=0;
let cont2=0;

while (tab < tabF){
	
	cont = 0
	tab = tab + 1

	while (cont < num){
		cont = cont + 1;
		mult = tab * cont;

	if (mult%2==0){
	cont1 = cont1 + 1;
	value = "Par"
	} else {
	cont2 = cont2 + 1;
	value = "Impar"
	}
	
	

	console.log(tab+ "x" +cont+ "=" +mult);
	console.log(value);
	
	
	}
}
	console.log("Cantidad de numeros pares: " +cont1);
	console.log("Cantidad de numeros impares: " +cont2);