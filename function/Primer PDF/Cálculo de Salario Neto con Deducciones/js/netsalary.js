/* Ejercicio: Calculo de Salario Neto con Deducciones
Fecha: 10 de octubre 2025
Autor: JeffersonAO
*/

let day=1;
let salaryMin=1400000;
let salary;
let dayValue=40000;
let trasnport;
let netSalary;
let discount;
let retention;

salary = dayValue * day;


function totalSalario (){

if (salary < salaryMin*2) {
trasnport = 114000;
} else (trasnport = 0);

let healt = salary * 0.12;
console.log("healt discount: " +healt);
let pension = salary * 0.16;
console.log("Pension discount: " +pension);
let arl = salary * 0.052;
console.log("arl discount: " +arl);
if (salary >= salaryMin*4) {
retention = salary * 0.04
} else (retention = salary * 0);

discount = healt + pension + arl + retention;
netSalary = salary - discount + trasnport;
return netSalary;
}

console.log("net salary: " +totalSalario());
