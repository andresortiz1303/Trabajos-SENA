/* Ejercicio: operaciones aritmeticas
Fecha: 22 de sept 2025
Autor: JeffersonAO
*/


let lado1=16;
let lado2=4;
let lado3=10;
let area1;
let area2;
let area3;

area1 = lado1 * lado1;
area2 = lado2 * lado2;
area3 = lado3 * lado3;

console.log("area 1: " +area1);
console.log("area 2: " +area2);
console.log("area 3: " +area3);

if (area1 == area2 & area1 == area3){
console.log("las tres areas son iguales");
} if (area1 > area2 & area1 > area3) {
console.log("el area 1 es mayor");
} if (area2 > area1 & area2 > area3){
console.log("el area 2 es mayor");
} if (area3 > area1 & area3 > area2){
console.log("el area 3 es mayor");
}

