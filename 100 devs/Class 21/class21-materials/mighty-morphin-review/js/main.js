// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
favHoliday = "CHRISTMAS"
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
myString = "HOLIDAY"
newString = myString.slice(-3)
console.log(newString)
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveNumbers(n1,n2,n3,n4,n5){
    console.log(Math.abs(100-n1-n2-n3-n4-n5))
}
fiveNumbers(1,2,3,4,5)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNumbers(n1,n2,n3){
    array = []
    array.push(n1)
    array.push(n2)
    array.push(n3)
    console.log(`The min is ${Math.min(...array)}`)
    console.log(`The max is ${Math.max(...array)}`)
}
threeNumbers(4,2,3)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    num = Math.round(Math.random(0,1))
    if (num === 0){
        return 'heads'
    }
    return 'tails'
}
console.log(headsOrTails())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function takeNumber(n1){
    for (i = 1; i<= n1;i++){
        num = Math.round(Math.random(0,1))
    if (num === 0){
        console.log('heads')
    }
    else{
        console.log('tails')
    }
    }
}
takeNumber(10)