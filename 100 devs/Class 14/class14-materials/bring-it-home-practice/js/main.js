// *Variables*
// Create a variable and console log the value
let myVariable = 150
console.log(myVariable)
// Create a variable, add 10 to it, and alert the value
myVariable += 10
alert(myVariable)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(a,b,c,d){
    return a-b-c-d
}

alert(subtractFourNumbers(12,5,1,2))

// Create a function that divides one number by another and returns the remainder
function returnRemainder(i,j){
    return i % j
}

console.log(returnRemainder(100,3))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(a,b){
    a+b > 50 ? alert('Jumanji'):console.log(a+b)
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeAlertZebra(a,b,c){
    (a*b*c) % 3 === 0 ? alert('ZEBRA'): console.log((a*b*c % 3))
}