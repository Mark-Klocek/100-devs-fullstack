// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str){
    let array = str.split('-')
                    .map((element,index)=> index == 0? element : element[0].toUpperCase() + element.slice(1))
                    .join('');
    return array
}

console.log(camelize("background-color"));       // "backgroundColor"
console.log(camelize("list-style-image"));       // "listStyleImage"
console.log(camelize("-webkit-transition"));     // "WebkitTransition"
console.log(camelize("border-left-width"));      // "borderLeftWidth"
console.log(camelize("font-size-adjust"));       // "fontSizeAdjust"
console.log(camelize("a-b-c-d-e"));              // "aBCD"
console.log(camelize("multiple-dashes-in-a-row"));// "multipleDashesInARow"


//
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

let arr = [5, 3, 8, 1]
function filterRange(arr,a,b){
    let array = arr.filter(item => item >= a && item <=b);
    

}

filterRange(arr,2,5)

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr,a,b){
    for (i = 0; i <arr.length; i++){
        let val = arr[i]
        if(val < a || val > b){
            arr.splice(i,1)
            i--;
        }
        
    }
    return arr
}

console.log(filterRangeInPlace(arr, 1, 4))

//sort in decreasing order
arr = [5, 2, 1, -10, 8];
function compareNumeric(a,b){
    if (a < b){
        return 1
    }
    if (a > b){
        return -1
    }
    if (a == b){
        return 0
    }
}
arr.sort(compareNumeric)


//Copy and sort array
//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

//Create a function copySorted(arr) that returns such a copy.

function copySorted(arr){
    let array = arr.slice().sort()
    return array
}
arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(arr)
console.log(sorted)

//create an extendable calculator

// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

//     First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

//     Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

//     let powerCalc = new Calculator;
//     powerCalc.addMethod("*", (a, b) => a * b);
//     powerCalc.addMethod("/", (a, b) => a / b);
//     powerCalc.addMethod("**", (a, b) => a ** b);

//     let result = powerCalc.calculate("2 ** 3");
//     alert( result ); // 8

//     No parentheses or complex expressions in this task.
//     The numbers and the operator are delimited with exactly one space.
//     There may be error handling if you’d like to add it.

function Calculator(){
    this.methods = {}
    this.calculate = function(str){
        splitStr = str.split(' ')
        let a = Number(splitStr[0])
        let operator = splitStr[1]
        let b = Number(splitStr[2])

        return this.methods[operator](a,b)
    }
    this.addMethod = function(oper, func){
        this.methods[oper] = func
    }

}

let calc = new Calculator
calc.addMethod('*',(a,b)=>a*b)
console.log(calc.calculate('10 * 12'))

//Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(elements => elements.name)
console.log(names)


//map to objects
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let usersMapped = users.map(elements => ({
    fullName: `${elements.name} ${elements.surname}`,
    id: elements.id
})

)
console.log(usersMapped[0])

//sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

arr = [ pete, john, mary ];


function sortByAge(users){
    users.sort((a,b)=>a.age - b.age)
}
sortByAge(arr)
console.log(arr[1])

//Get Average Age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

arr = [ john, pete, mary ];

function getAverageAge(users){
    let total = 0
    users.map(item => total += item.age)
    return (total / users.length)
}

console.log(getAverageAge(arr))
// Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users){
    let newUser = users.reduce((newObj,elements) => {
        newObj[elements.id] = elements
        return newObj
    }, {})
    return newUser
}
let usersById = groupById(users);
console.log(usersById)



// The JSway course work!//
//Musketeers

// Write a program that:

//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//     Shows each array element using a for loop.
//     Adds the "D'Artagnan" value to the array.
//     Shows each array element using the forEach() method.
//     Remove poor Aramis.
//     Shows each array element using a for-of loop.

let musketeers = ['Athos','porthos','Aramis']
for (i=0;i<musketeers.length;i++){
    console.log(musketeers[i])
}
musketeers.push("D'Aragnan")
musketeers.forEach(element => console.log(element))
musketeers.splice(2,1)
for (musketeer of musketeers){
    console.log(musketeer)
}

// Sum of Values
//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const myValues = [3, 11, 7, 2, 9, 10];

let sumOfValues = myValues.reduce((newObj, element) => newObj += element, 0)
console.log(sumOfValues)


const values = [3, 11, 7, 2, 9, 10, 14, 8, 1, 6, 13, 4, 5, 12, 15, 17, 18, 16, 19, 20, 21, 22, 24, 23, 25, 26, 28, 27, 29, 30, 31, 33, 32, 34, 35, 36, 37, 39, 38, 40, 41, 43, 42, 44, 45, 46, 47, 48, 49, 50];
let maxValue = 0

for(const value of values){
    if (value > maxValue){
        maxValue = value
    }
}
console.log(maxValue)


wordArray = []
word = prompt('Welcome to the stop game! we keep asking until you type stop, then give you all the words you entered before stop!')
while (word !== 'stop'){
    wordArray.push(word)
    word = prompt('Keep going! we go until you wanna stop')
}

console.log(wordArray)