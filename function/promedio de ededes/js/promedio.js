
let age1=9
let age2=10
let age3=11


function mayoriaDeEdad(age1, age2, age3){
    

    let suma = age1 + age2 + age3;
    let average = suma/3;
    return average;
    

} 

console.log("age average is: " +mayoriaDeEdad(age1, age2, age3));

if (age1>=18){
        console.log("It's May of age")
    } else{
        console.log("is not of legal age")
        
    }

 if (age2>=18){
        console.log("It's May of age")
        
    } else{
        console.log("is not of legal age")
        
    }
 if (age3>=18){
    console.log("It's May of age")
    } else{
        console.log("is not of legal age")
    }
    