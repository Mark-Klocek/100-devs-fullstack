
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
//count of positives/sum of negatives
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  return input.reduce((acc, c) => {
    if (c > 0) acc[0]++;
    else if (c < 0) acc[1] += c;
    return acc;
  }, [0, 0]);
}
//Stop gninnipS My sdroW!
function spinWords(string){
  stringArray = string.split(' ')
  for (i = 0; i <stringArray.length;i++){
      if (stringArray[i].length >= 5){
        stringArray[i] = stringArray[i].split('').reverse().join('')
      }

  }
  return stringArray.join(' ')
}
//bit counting
var countBits = function(n) {
  let binConvert = n.toString(2)
  let counter = 0
  for (i = 0; i < binConvert.length;i++){
    if (binConvert[i] == 1){
      counter++
    }
  }
  return counter
};
//Your order, please
function order(words){
  let brokenArray = words.split(' ')
  let newArray = []
  brokenArray.forEach((element) =>{
    for (i = 0; i < element.length ; i++){
      if (!isNaN(element[i])){
          newArray[element[i]-1] = element

      }
    }
    
  })
  return newArray.join(' ')
  
}

console.log(order('th1s i3s m4y st2ring'))

//sort and star
sortAndStarString = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]
function twoSort(s) {
  return s.sort()[0].split('').join('***')
}

console.log(twoSort(sortAndStarString))
//is there a vowel in there?
let testArray = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
function isVow(a){
  let vowelCodes ={
    97 : 'a',
    101 : 'e',
    105 : 'i',
    111 : 'o',
    117 : 'u'
  }
  let newArray = a.map((element)=> Object.keys(vowelCodes).includes(element.toString()) ? vowelCodes[element.toString()] : element)
  
  return newArray
}
console.log(isVow(testArray))
// you only need one - beginner
testArray = ['what', 'a', 'great', 'kata']
 
let testString = 'kat'
function check(a, x) {
  return a.includes(x)
}
console.log(check(testArray,testString))
// Add Length
testString = "you will win"
function addLength(str) {
  return str.split(' ').map((element) => element + ' '+ element.length)
}
console.log(addLength(testString))
//Lost without a map
testArray = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
function maps(x){
  return x.map(element => element * 2)
}
console.log(maps(testArray))
//Basic Training: Add item to an Array
var websites = [];
websites.push('codewars')
console.log(websites)
// Calculate Averages

function findAverage(array) {
  return array.length > 0 ?array.reduce((acc,c) => acc+= c,0) / array.length : 0
   
}
console.log(findAverage([1,2,3,4]))
//Take an Arrow to the knee, Functionally
const arrowFunc = function(arr) {
  return arr.map(element =>String.fromCharCode(element)).join('');
}
console.log(arrowFunc([84,101,115,116]))
//Enumerable Magic #1 - True for All?
function all( arr, func ){
  for (i = 0; i < arr.length ; i++){
    if (!func(arr[i])){
      return false
    }
  }
  return true
}
console.log(all([1, 2, 3, 4, 5], function(v) { return v > 9; }))

//roman Numerals Encoder
function solution(number){
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds  = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens      = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones      = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  let strArray = number.toString().split('')
  while (strArray.length < 4){
    strArray.unshift('0')
  }
  for(i=0;i<strArray.length;i++){
    if (i ==0){strArray[i] = thousands[strArray[i]]}
    if (i ==1){strArray[i] = hundreds[strArray[i]]}
    if (i ==2){strArray[i] = tens[strArray[i]]}
    if (i ==3){strArray[i] = ones[strArray[i]]}
  }
  return strArray.join('')
}
console.log(solution(1666))
// Logical Calculator
function logicalCalc(array, op){
  opMap = {
    'AND' : (a,b) => a && b,
    'OR' : (a,b) => a || b,
    'XOR' : (a,b) => a !== b
  }
  if (Object.keys(opMap).includes(op)){
    return array.reduce(opMap[op])
  }
  else{
    return 'invalid operator'
  }
}
console.log(logicalCalc([true, true, false, false], "AND"))
// How many stairs will suziki climb in 20 years?
function stairsIn20(s){
  return ((s.reduce((acc, c) => acc += c.reduce((acc,c) => acc += c,0),0)) * 20)
}
//A Needle in the Haystack
function findNeedle(haystack) {
  if (haystack.includes('needle')){
    return `found the needle at position ${haystack.indexOf('needle')}`
  }
  return "Your function didn't return anything"
}
//Grasshopper - Array mean
testArray = [1, 3, 5, 7]
function findAverage(nums) {
  return (nums.reduce((acc,c) => acc += c,0)/nums.length)
}
console.log(findAverage(testArray))