
//Question 1

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

function printArray(array){
    return array.join(',')
  }

//Question 2
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
function sum (numbers) {
    let sum = 0
    numbers.forEach((x,i) => sum+= x)
    return sum
  }

//Question 3
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g,"");
  }

//Question 4
//This code does not execute properly. Try to figure out why.
//function multiply(a, b){
//     a * b
//}
function multiply(a, b){
    return a * b
  }