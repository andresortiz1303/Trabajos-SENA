/* Ejercicio:Diagrama de tablas del 2 al 12 hsata el multiplo 10
Fecha: 24 de sept 2025
Autor: JeffersonAO
*/

let tab=1;
let tabF=12;
let num=10;
let cont;
let mult;
let result1=0;
let result2=0;
let result3=0;
let odd=0;

while (tab < tabF){
	
	cont=0
		
	tab = tab + 1

	while (cont < num){
	cont = cont + 1;
	mult = cont * tab;
	
	console.log(tab+ "x" +cont+ "=" +mult);

	if (mult%2==0){
	odd = odd + 1
	}
	
	if (mult > 10 & mult < 20){
	result1 = result1 + 1
	} if (mult > 20 & mult < 50){
	result2 = result2 + 1
	} if (mult > 50){
	result3 = result3 + 1
	}

	}
}

console.log("odd: " +odd);
console.log("The number of numbers between 10 and 20 are: " +result1)
console.log("The number of numbers between 20 and 50 are: " +result2)
console.log("The number of numbers between 50: " +result3)