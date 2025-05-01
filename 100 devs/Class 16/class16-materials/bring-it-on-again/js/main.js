// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 12;
alert(num);
// Create a variable, divide it by 10, and console log the value
let newNum = 2323;
console.log(newNum/10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNumbersAlert(n1,n2,n3){
    product = n1 * n2 * n3
    alert(product)
}
multiplyThreeNumbersAlert(23,32,12)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addFirstTwoSubNextTwo(n1,n2,n3,n4){
    firstTwo = n1+n2
    secondTwo = n3+n4
    console.log(firstTwo - secondTwo)
}
addFirstTwoSubNextTwo(23,321,1245,412)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumbers(n1,n2,n3){
    if (((100 + n1) - n2) / n3 > 25){
        console.log('WE HAVE A WINNA!')
    }
}
threeNumbers(12312,3213,4)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day){
    day = day.toLowerCase()
    if ( day=='saturday' || day == 'sunday'){
        alert("It's the weekend!")

    }
    else if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
        alert('week day')
    }
    else{
        alert("Try again")
    }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function counter(n){
    for (i=1; i<= n; i+= 3){
        console.log(i)
    }
}
counter(125)