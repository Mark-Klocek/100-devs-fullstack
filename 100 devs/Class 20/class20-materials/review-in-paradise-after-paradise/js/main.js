// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function firstOrLastNumber(array){
    firstNum = array[0]
    lastNum = array[array.length - 1]
    if (firstNum > lastNum){
        alert('bye')
    }
    if (lastNum > firstNum){
        alert('hi')
    }
    if (lastNum == firstNum){
        alert('We close in an hour')
    }
}
let arr=[442,1,2,3,1,2,3,5,2,1,2,3,10,123,123,112,213]
firstOrLastNumber(arr)