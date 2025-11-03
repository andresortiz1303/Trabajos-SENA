/* Ejercicio:Cálculo del Peso en Diferentes Planetas
Fecha: 23 de sept 2025
Autor: JeffersonAO
*/

let cont=0;
let contMass=0;
let mass=1;
let gTierra=9.81;
let gMarte=3.71;
let gJupiter=24.79;
let eart=1;
let mars=2;
let jupiter=3;
let planet;
let peso;
let w;
let sum=0;

while(mass > 0){
	mass= prompt("ingrese masa", );
	
	planet=3
	
	if (mass > 0){
	if (planet==1){
	w = mass*gTierra
	console.log("la masa: " +w);
	} if (planet==2){
	w = mass*gMarte
	console.log("la masa: " +w);
	} if (planet==3){
	w = mass*gJupiter;
	console.log("la masa: " +w);
	}
	sum = sum + w;
     	cont = cont+1;

	console.log("Numero de calculos realizados: " +cont);
	console.log("La suma de las masas es: " +sum);
	}
	 else {console.log("error la masa es negativa");
	}
	mass=-1	

}