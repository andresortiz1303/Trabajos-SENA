/* Ejercicio: Calculo de Salario Neto con Deducciones
Fecha: 22 de sept 2025
Autor: JeffersonAO
*/

let day=1;
let salaryMin=1400000;
let salary;
let dayValue=40000;
let trasnport;
let arl;
let pension;
let healt;
let netSalary;
let discount;
let retention;

salary = dayValue * day;

if (salary < salaryMin*2) {
trasnport = 114000;
} else (trasnport = 0);

healt = salary * 0.12;
pension = salary * 0.16;
arl = salary * 0.052;

if (salary >= salaryMin*4) {
retention = salary * 0.04
} else (retention = salary * 0);

discount = healt + pension + arl + retention;
netSalary = salary - discount + trasnport;

console.log("arl discount: " +arl);
console.log("Pension discount: " +pension);
console.log("healt discount: " +healt);
console.log("Retention discount: " +retention);
console.log("total discount: " +discount);
console.log("subsidy trasnport: " +trasnport);

console.log("net salary: " +netSalary);
