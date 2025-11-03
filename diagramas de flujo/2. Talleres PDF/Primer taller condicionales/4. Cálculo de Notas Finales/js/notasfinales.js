/* Ejercicio: Cálculo de Notas Finales
Fecha: 22 de sept 2025
Autor: JeffersonAO
*/

let note1=10;
let note2=8;
let note3=8;
let percentage1;
let percentage2;
let percentage3;

percentage1 = note1 * 20 / 100;
percentage2 = note2 * 35 / 100;
percentage3 = note3 * 45 / 100;

sumpercentage = percentage1 + percentage2 + percentage3;

if (sumpercentage >= 4.5){
console.log("top note")
} else if (sumpercentage >= 3.5 & sumpercentage < 4.5){
console.log("Good Note")
} else if (sumpercentage > 3 & sumpercentage < 3.5){
console.log("Average Grade")
} else {
console.log("Bad Note");
}