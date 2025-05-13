
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

//Search for letters
function change(string){
  binaryString = []
  for (i=1;i<=26;i++){
    binaryString.push(0)
  }
  loweredString = string.toLowerCase()
  for(i = 0; i < loweredString.length; i++){
    if (loweredString[i] >= 'a' && loweredString[i] <= 'z'){
      index = loweredString[i].charCodeAt(0) - 'a'.charCodeAt(0)
      binaryString[index] = 1
    }
  }
  return(binaryString.join(''))
}
// age range compatability
function datingRange(age){
  if (age <= 14){
    let min = age - 0.10 * age
    let max = age + 0.10 * age
    return `${Math.floor(min)}-${Math.floor(max)}`;
  }
  let min = (age/2) + 7
  let max = 2 * (age - 7)
  return `${Math.floor(min)}-${Math.ceil(max)}`;
}

//Regular ball super ball
class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
}
//Removing Elements
function removeEveryOther(arr){
  return arr.filter( (element,index) => index % 2 == 0 );
}
//squaring an argument
function square(num){
  return num**2
}
//count the monkeys
function monkeyCount(n) {
  monkeyArray = []
  for(i = 1; i<= n;i++){
    monkeyArray.push(i)
  }
  return monkeyArray
}
//Return Two Highest Values in List
function twoHighest(arr) {
  let arrSet = new Set(arr);
  let newArr = Array.from(arrSet)
  if (newArr.length > 2){
      
      return (newArr.sort((a,b)=>b-a).slice(0,2))
  }
  return arr.sort((a,b)=> a-b)
  
}
//Remove duplicates from list
function distinct(a) {
  let b = new Set(a)
  return Array.from(b);
}
//get ascii value of character
function getASCII(c){
  return c.charCodeAt(0)
}
//simple calculator 
function calculator(a,b,sign){
  if (sign !== '+' && sign !== '-' && sign !== '*' && sign !=='/'){
    return "unknown value"
  }
  if (isNaN(a) || isNaN(b)){
    return 'unknown value'
  }
  if (sign === '*'){
    return (a * b)
  }
  else if (sign === '+'){
    return (a + b)
  }
  else if (sign === '-'){
    return (a-b)
  }
  else if (sign === '/'){
    return (a/b)
  }
}
// how good are you really?
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > ((classPoints.reduce((acc,c)=> acc += c,0))/classPoints.length)
}
//For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
function quote(fighter) {
  return fighter.toLowerCase() === 'george saint pierre' ? "I am not impressed by your performance.": "I'd like to take this chance to apologize.. To absolutely NOBODY!"
};
//Regexp Basics - is it a digit?
String.prototype.digit = function() {
  return this.length === 1 && this >= '0' && this <= '9';
};
