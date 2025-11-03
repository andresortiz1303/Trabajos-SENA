/* Ejercicio: Cálculo de Notas Finales
Fecha: 10 de octubre 2025
Autor: JeffersonAO
*/

let note1=1;
let note2=2;
let note3=3;
//let percentage1;
//let percentage2;
//let percentage3;

function finalNote (note1, note2, note3){
let percentage1 = note1 * 20 / 100;
let percentage2 = note2 * 35 / 100;
let percentage3 = note3 * 45 / 100;

let sumpercentage = percentage1 + percentage2 + percentage3;

if (sumpercentage >= 4.5){
console.log("top note")
} else if (sumpercentage >= 3.5 & sumpercentage < 4.5){
console.log("Good Note")
} else if (sumpercentage > 3 & sumpercentage < 3.5){
console.log("Average Grade")
} else {
console.log("Bad Note");
}
return sumpercentage;


}


console.log("el promedio de notas es: " +finalNote (note1, note2, note3))