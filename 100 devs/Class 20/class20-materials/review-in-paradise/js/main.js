// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = ''
favoriteFood = 'korean bbq'
//alert(favoriteFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newVariable = 'wow'
//alert(newVariable[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeParams(n1,n2,n3){
    return ((n1/n2) * n3)
}
console.log(threeParams(5,4,3))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneParam(n1){
    console.log(Math.cbrt(n1))
}
oneParam(5)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function takeMonth(string){
    string = string.toLowerCase()
    if (string === 'june'||string === 'july'||string === 'august'){
        //alert('YAY')
    }
    else{
        //alert('BOO')
    }
}
takeMonth('june')
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function takeANumber(n1){
    for (i=1; i<= n1;i++){
        if (i % 5 == 0){
            ''
        }
        else{
            console.log(i)
        }
    }
}

takeANumber(55)