let lado1=prompt ("Ingrese primer lado ", );
let lado2 =prompt ("Ingrese segundo lado ", );
let lado3=prompt ("Ingrese tercer lado ", );
let area1;
let area2;
let area3;

function multiplyNumbers(lado1, lado2, lado3){
    lado1=lado1;
    lado2=lado2;
    lado3=lado3;
    let area1= lado1 * lado1;
    let area2 = lado2 * lado2;
    let area3 = lado3 * lado3;
    return area1;
    return area2;
    return area3;
}

console.log("area of the first square: " +multiplyNumbers(lado1,lado1));
console.log("area of the first square: " +multiplyNumbers(lado2,lado2));
console.log("area of the first square: " +multiplyNumbers(lado3,lado3));