/* Ejercicio:promedio de edades
Fecha: 22 de sept 2025
Autor: JeffersonAO
*/


function edad() {
    let age1 = parseInt(document.getElementById("age1").value);
    let age2 = parseInt(document.getElementById("age2").value);
    let age3 = parseInt(document.getElementById("age3").value);

    let average = (age1 + age2 + age3) / 3;

    function mayorDeEdad(age1, age2, age3) {
        if (age1 >= 18) {
             (age1 + " = Es mayor de edad");
        } else {
           return  ("No es mayor de edad");
             
        }
        if (age2 >= 18) {
           (age2 + " = Es mayor de edad");
        } else {
             return ("No es mayor de edad");
              
        }
        if (age3 >= 18) {
           (age3 + " = Es mayor de edad");
        } else {
            return ("No es mayor de edad");
             
        }
    }


    let result = "Edad 1: " + age1 + " Edad 2: " + age2 + " Edad 3: " + age3;
    document.getElementById("result").innerHTML = "Las edades ingresadas son: " + result;
    document.getElementById("result").innerHTML += "<br>El promedio de las edades es: " + average;
    
    let mayor = mayorDeEdad(age1);
    document.getElementById("result").innerHTML += "<br>" + mayor;
    let mayor2 = mayorDeEdad(age2);
    document.getElementById("result").innerHTML += "<br>" + mayor2;
    let mayor3 = mayorDeEdad(age3);
    document.getElementById("result").innerHTML += "<br>" + mayor3;
}
