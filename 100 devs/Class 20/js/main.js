
//Adding character experience
const aurora = {
    health : 130,
    strength : 15,
    xp : 0,

    describe (){
        return `Aurora has ${this.health} health points, ${this.strength} as strength, and ${this.xp} XP points`
    }
}

aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//Modeling a dog

const dog = {
    dogName : "Fang",
    species : "boarhound",
    size: 75,
    bark (){
        return 'Grrr! Grrr!'
    }
}
console.log(`${dog.dogName} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.dogName} barks: ${dog.bark()}`);
//modeling a bank account
const account = {
    name : "Alex",
    balance : 0,
    credit(n1){
        this.balance += n1
    },
    describe(){
        return `owner : ${this.name}, balance ${this.balance}`
    }

}
console.log(account.describe())
account.credit(250)
console.log(account.describe())
account.credit(-80)
console.log(account.describe())
//modeling a circle

const r = 9

const circle = {
    circumference(){
        return (r * 2 * Math.PI)
    },
    area(){
        return ((r ** 2) * Math.PI)
    }
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

/// elequent js
// the sum of a range
function range(start,end){
    let arr = []
    for (i=start;i<=end;i++){
        arr.push(i)
    }
    return arr
}
function sum(arr){
    let sum = 0
    for (i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sum(range(1, 10)));
//reverse array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.
myArray = ["A", "B", "C","D","E","F"];
function reverseArray(arr){
    newArray = []
    for(let i = arr.length - 1; i>=0 ;i--){
        newArray.push(arr[i])
    }
    return newArray
}
console.log(reverseArray(myArray))
let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arr){
   for(i = 0; i <= arr.length / 2; i++)[
    temp = arr[i],
    arr[i] = arr[arr.length - 1 - i],
    arr[arr.length - 1 - i] = temp
   ]
   return arr
}
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// A list
//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
arrayValue = [1, 2, 3, 4, 5]
console.log(arrayValue)
myObject = null
function arrayToList(arr){
    for(i = arr.length -1;i>=0;i--){
        myObject = {'value':arr[i], 'rest':myObject}
    }
    return myObject
}
myObject = arrayToList(arrayValue)

console.log(myObject)
function listToArray(obj){
    arrayValue = []
    while (obj !== null){
        arrayValue.push(obj.value),
        obj = obj.rest

    }
    return arrayValue
}
arrayValue = listToArray(myObject)
console.log(arrayValue)
myObject = null
function prepend(a, obj){
    myObject = {'value': a, 'rest':obj}
    return myObject
}
myObject = prepend(10, prepend(20, null))
console.log(myObject)
function nth(obj,n1){
    let num = null
    for(i=0;i<=n1;i++){
        num = obj.value,
        obj = obj.rest
    }
    return num
}
nthNonRecursive = nth(arrayToList([10, 20, 30, 40, 50, 60, 70]), 3)
console.log(nthNonRecursive)
function nthRecursive(obj,n1){
    if (obj === null){
        return "index out of range"
    }
    if (n1 === 0){
        return obj.value
    }
    else{
        return nthRecursive(obj.rest, n1-1)
    }
}

nthRecursive = nthRecursive(arrayToList([10, 20, 30, 40, 50, 60, 70]), 20)
console.log(nthRecursive)

function deepEqual(n1,n2){
    if ((typeof n1 === "object" && n1 !== null) && (typeof n2 === "object" && n2 !== null)){
        keys1 = Object.keys(n1)
        keys2 = Object.keys(n2)
        if (keys1.length === keys2.length){
            for(i=0;i<keys1.length;i++){
                if (!keys2.includes(keys1[i])){
                    return false
                }
            for (j=0;j<keys1.length; j++){
                key = keys1[j]
                if (!deepEqual(n1[key],n2[key])){
                    return false
                }
            }    
            return true
                
            }
        }
        else{
            return false
        }
    }
    else return n1 === n2
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(1, 1)); // true
console.log(deepEqual(1, "1")); // false

// null vs object
console.log(deepEqual(null, {a: 1})); // false
console.log(deepEqual(null, null)); // true

// shallow equal objects
console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2})); // true
console.log(deepEqual({a: 1, b: 2}, {b: 2, a: 1})); // true

// different keys
console.log(deepEqual({a: 1}, {b: 1})); // false

// nested objects
console.log(deepEqual({a: {b: 2}}, {a: {b: 2}})); // true
console.log(deepEqual({a: {b: 2}}, {a: {b: 3}})); // false

// array vs object
console.log(deepEqual([1, 2, 3], {0: 1, 1: 2, 2: 3})); // false

// deeply nested difference
console.log(deepEqual({a: {b: {c: 3}}}, {a: {b: {c: 4}}})); // fals