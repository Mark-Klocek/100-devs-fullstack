// *Variables*
// Create a variable and console log the value
let myVar = 13
console.log(myVar)
// Create a variable, add 10 to it, and alert the value
myVar = 0
myVar += 10
alert(myVar)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourThenAlert(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}
// Create a function that divides one number by another and returns the remainder
function divideReturnRemainder(n1,n2){
    return n1 % n2
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoReturnJumanji(n1,n2){
    if (n1+n2 > 50){
        alert('JUMANJI!')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumbersAlertZebra(n1,n2,n3){
    if ((n1*n2*n3) % 3 === 0){
        alert('ZEBRA')
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loop(word,n1){
    for (i=1; i<=n1;i++){
        console.log(word)
    }
}