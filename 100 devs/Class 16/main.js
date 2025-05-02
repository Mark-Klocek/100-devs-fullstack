//3 2 1 code

function nameAge(name,age){
    console.log(`My name is ${name} and I am ${age} years old.`)
}

function simpleCalculator(){
    console.log(6+3)
    console.log(6-3)
    console.log(6*3)
    console.log(6/3)
}


//play with variables

// let firstName = prompt('What is your first name?')
// let lastName = prompt('What is your last name?')
// console.log(`His name is ${firstName} ${lastName}`)
function calcVat(n1){
    return n1*1.26
}
function celciusToFarenheit(){
    let celcius = prompt('What temperature is it in C?')
    alert(`${celcius * (9/5) + 32} Farenheit`)
}
let number1 = 5;
let number2 = 3;

let temp = number1
number1 = number2
number2 = temp
