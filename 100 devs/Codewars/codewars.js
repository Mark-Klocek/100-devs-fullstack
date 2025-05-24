
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
//Enumerable magic #20 - cascading subsets
function eachCons(array, n) {
  finalArray = []
	for (i = 0; i < array.length; i++){
    if (i + n <= array.length){
      finalArray.push(array.slice(i,n+i))
    }
    else{
      return finalArray
    }
  }
  return finalArray
  
}
console.log(eachCons(testArray,1))
// pick a set of first elements
function first(arr, n=1) {
  returnArray = []
  for (i=0;i<n;i++){
    if (returnArray < arr){
      returnArray.push(arr[i])
      }
    else{
      return returnArray
    }
  }
  return returnArray
}
console.log(first(testArray),4)
//UEFA EURO 2016
function uefaEuro2016(teams, scores){
  if (scores[0] == scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
  return scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` : `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
}
console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 3]))
console.log(Math.log10(5000))
//duck duck goose
function duckDuckGoose(players, goose) {
  while (goose > Object.keys(players).length){
    goose -= Object.keys(players).length
  }
  return players[goose-1].name
}
console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 17))
//CSV representation of array
function toCsvText(array) {
  returnString = ''
  for (i = 0; i < array.length; i++){
    if (i < array.length -1){
      returnString += array[i].join(',')
      returnString += '\n'
    }
    else{
      returnString += array[i].join(',')
    }
  }
   return returnString
}
console.log(toCsvText([[ 0, 1, 2, 3, 45 ],[ 10,11,12,13,14 ],[ 20,21,22,23,24 ],  [ 30,31,32,33,34 ]]))
//Classic hello world
class Solution{
}
Solution.main = function(){console.log('Hello World!')}
//Classy Extentions
// class Cat extends Animal {
//   speak = function(){
//     return `${this.name} meows.`
//   }
  
// }
//Color Ghost
let Ghost = function() {
  possibleColors = ['white','yellow','purple','red']
  this.color = possibleColors[Math.floor(Math.random()*possibleColors.length)]
};
//Playing with cubes II
class Cube {
  constructor(side=0){
    this.side = Math.abs(side)
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}
//Classy Classes
class Person1 {
  constructor(name,age) {
    this.name = name
    this.age = age
    this.info = `${name}s age is ${age}`
  }
  
  
}
let john = new Person1('john', 34)
console.log(john.info)



///
/// 5-17-25
///
//Fun with ES6 Classes #1 - People, people, people
class Person {
  constructor(firstName = 'John',lastName = 'Doe',age = 0, gender = 'Male'){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
  }
  sayFullName(){
    return `${this.firstName} ${this.lastName}`
    
  };
  static greetExtraTerrestrials(raceName){
    return `Welcome to Planet Earth ${raceName}`
  }
  
}
console.log(Person.greetExtraTerrestrials('Martians'))
//Finish Guess the Number Game
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives == 0){
      return Error.isError()
    }
    if (n === this.number){
      return true
    }
    else{
      this.lives --
      return false
    }
    
  }
}
//Basic Subclasses - Adam and Eve
class God{
/**
 * @returns Human[]
 */
  static create(){
    return [new Man(), new Woman()]
  }
}
class Human{
  
}
class Man extends Human{
  
}
class Woman extends Human{
  
}
// object oriented piracy
class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt(){
    return (this.draft - (this.crew * 1.5)) > 20
  }
  
}
//Circular Objects #1 - Running around in circles
const circular = {}
circular.value = 'Hello World'
circular.self = circular
console.log(circular)

///
/// 5-18-25
///
//Array Array Array
function explode(x){
  numCounter = 0
  let total = x.reduce((acc,c) =>{
    if (!isNaN(c)){
      acc += c
      numCounter ++
    }
    return acc
  },0)
  returnArray = []
  for (i=1; i <= total; i++){
    returnArray.push(x)
  }
  if (numCounter == 0){
    return 'Void!'
  }
  return returnArray
}
console.log(explode(['a','b32']))
//The 'spiraling' box NOTE: We are trying to find out how far away from the edge we are here.
function createBox(m, n) {
  returnArray = []
  for (let i =0; i < n; i++){
    pushArray = []
    for(let j = 0; j<m;j++){
      pushArray.push(Math.min(i,j,n-1-i,m-1-j)+1)
    }
    returnArray.push(pushArray)
  }
  return returnArray
}
console.log(createBox(5,5))
//Return a string's even characters.
function evenChars(string) {
  if (string.length < 2 || string.length > 100){
    return 'invalid string'
  }
  returnArray = []
  string.split('').forEach((element,index)=> (index - 1)% 2 == 0?returnArray.push(element): '')
  return returnArray
}
console.log(evenChars('asdasdasd'))
// Name Array Capping
function capMe1(names) {
  return names.map((element,_) => {
    splitElement = element.split('')
    return splitElement.map((element,index)=> index == 0? element = element.toUpperCase():element = element.toLowerCase()).join('')
     
    
  })
}
function capMe(names){
  return names.map((element) => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase())
}
console.log(capMe(['JOE', 'neNeLsOnlson', 'JuRiE']))

//Partial Word Searching
function wordSearch(query, seq){
  let arr = []
  arr = seq.filter((element) => element.toLowerCase().includes(query.toLowerCase()))
  arr.length === 0 ? arr.push('Empty') : ''
  return arr
}
  
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]))
//Filter unused digits
function unusedDigits(...arr) {
  let returnArray = arr.join('').split('').sort((a,b)=> a-b).join('')
  returnString = ''
  for (i = 0; i<=9; i++){
    returnArray.includes(i)? '':returnString += i
  }
  
  return returnString
}
console.log(unusedDigits(12, 34, 56, 78))
//
// 5-19-25
//
//Doggy Daycare
// Dog.prototype.checkDog = function(){
//   if (this.vaccinated ===true && this.wormed ===true){
//     return `${this.name} can be accepted`
//   }
  
//   else if (this.vaccinated ===false && this.wormed ===false){
//     return `${this.name} can not be accepted`
//   }
//   else {
//     return `${this.name} can only be accepted by itself`
//   }
// }
//Fun with ES6 Classes #4 - Cubes and Setters
class Cube2 {
  constructor(length){
    this.length = length
    
  }
  set volume(n){
    this._volume = n
    this.length = Math.cbrt(n)
  }
  get volume(){
    return this.length **3
  }

  set surfaceArea(n){
    this._surfaceArea = n
    this.length = Math.sqrt(n / 6)
  }
  get surfaceArea(){
    return 6 * (this.length **2)
  }
}
let cube = new Cube2(1);
cube.length = 2;

cube.volume = 125
console.log(cube.surfaceArea)
//JavaScript class-like objects
class Animal{
  constructor(name, type){
    this.name = name
    this.type = type
  }
  toString = function(){
    return `${this.name} is a ${this.type}`
  }
}
let dog = new Animal('Max', 'dog');
console.log(dog.toString());
console.log(dog.type); 
dog.name; 
dog.name = 'Lassie';
// Fun with ES6 Classes#2 - Animals and Inheritence
class Shark extends Animal {
  constructor(name,age,status) {
    super(name,age,0,'shark',status)
    
  }
}

class Cat extends Animal {
  constructor(name,age,status) {
    super(name,age,4,'cat',status)
    
  }
  introduce(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name,age,status,master) {
    super(name,age,4,'dog',status)
    this.master = master
    
  }
  greetMaster(){
    return `Hello ${this.master}`
  }
}
//Building Blocks
class Block{

  constructor(data){
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
  }
  
  getWidth(){
    return this.width
  }
  
  getLength(){
    return this.length
  }
  
  getHeight(){
    return this.height
  }
  
  getVolume(){
    return (this.length * this.width * this.height)
  }
  getSurfaceArea(){
    return (2*((this.length*this.width)+(this.length*this.height)+(this.width*this.height)))
  }
}
//
// 5-20-25
//
// 7 kyu Magic Index 
function findMagic(arr){
  magicExists = -1
  arr.forEach((element,index)=>{
    if (element === index){
      magicExists = index
    }
    
  })
  return magicExists
  
}
console.log(findMagic([6, 5, 83, 5, 3, 18]))
//
// 5-22-25
//
//7 kyu Thinkful - Object Drills: Quarks
class Quark{
  constructor(color,flavor){
    this.color = color
    this.flavor = flavor
    this.baryon_number = 1/3
  }
  interact(obj){
    
    let placeHolder = obj.color
    obj.color = this.color
    this.color = placeHolder
  }
}
//7 kyu Thinkful - Re-open class
String.prototype.myNewMethod = function(){ return this.toUpperCase()}
//
// 5-24-25
//
//7 kyu Sum of Odd Cubed Numbers
function cubeOdd(arr) {
  if (arr.some(element => typeof element != 'number')){
    return undefined
  }
  return arr.reduce((acc,c)=> {
    if (c % 2 != 0){
      acc += Math.pow(c,3)
    }
    return acc
  },0)
}
console.log(cubeOdd(["a",12,9,"z",42]))
//7 kyu Geometric sequence - sum of all elements
function geometricSequenceSum(a, r, n) {
  arr = [a]
  
  for (i = 0;i<n-1;i++){
    arr.push(arr[i]*r)
  }
  return arr.reduce((acc,c)=>acc+=c,0)
}
console.log(geometricSequenceSum(1, -2, 10))
//7 kyu Arithmetic List!
var seqlist = function(first,c,l){
  let arr = [first]
  for (i=0;i<l-1;i++) arr.push(arr[i]+c)
  return arr
}
console.log(seqlist(0,1,20))
