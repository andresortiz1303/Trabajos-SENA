/* Ejercicio: operaciones aritmeticas
Fecha: 22 de sept 2025
Autor: JeffersonAO
*/


    

function calculo() {
    let lado1 = parseInt(document.getElementById("lado1").value);
    let lado2 = parseInt(document.getElementById("lado2").value);
    let lado3 = parseInt(document.getElementById("lado3").value);

    let area1 = lado1 * lado1;
    let area2 = lado2 * lado2;
    let area3 = lado3 * lado3;

    function compararAreas(area1, area2, area3) {
        if (area1 == area2 && area1 == area3) {
            return "Las tres areas son iguales";

        } if (area1 > area2 && area1 > area3) {
            return "El area 1 es mayor";

        } if (area2 > area1 && area2 > area3) {
            return "El area 2 es mayor";

        } if (area3 > area1 && area3 > area2) {
            return "El area 3 es mayor";

        }
    }
    let result = "Primera área: " + area1 + " Segunda área: " + area2 + " Tercera área: " + area3;
    document.getElementById("result").innerHTML = "Las areas de los cuadrados son: " + result;
    let comparacion = compararAreas(area1, area2, area3);
    document.getElementById("result").innerHTML += "<br>" + comparacion;
}