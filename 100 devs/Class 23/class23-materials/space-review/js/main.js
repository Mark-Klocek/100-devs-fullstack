//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numArray = [23,23,12,32,12]
console.log(numArray.reduce((acc,element) => acc += element,0))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
console.log(numArray.map(element => element **2))
//Create a function that takes string
//Print the reverse of that string to the console
let myString = "amanaplanacanalpanama"
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString(myString))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const myPalindrome = str => console.log(str === str.split('').reverse().join(''))
myPalindrome(myString)