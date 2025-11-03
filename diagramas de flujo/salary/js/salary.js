/* Ejercicio: operaciones aritmeticas
Fecha: 20 de sept 2025
Autor: JeffersonAO
*/

let days=3;
let dayValve=40000;
let salary;
let healt;
let pension;
let arl;
let discount;
let netSalary;

salary = days * dayValve;

healt = salary * 0.12;
pension = salary * 0.16;
arl = salary * 0.052;
discount = healt + pension + arl;
netSalary = salary - discount;

console.log("descuento: " +discount);
console.log("salario neto: " +netSalary)
