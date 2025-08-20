console.log('test')
// Translate border-left-width to borderLeftWidth
// importance: 5

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.
function camelize(str){
    let splitArr = str.split('-')
    returnString = ''
    splitArr.forEach((element,index)=>{
        if (element.length > 0 && index > 0){
            let camel = element[0].toUpperCase()
            element = element.split('')
            element[0] = camel
            element = element.join('')
            
            returnString += element
        }else if (element.length > 0){
            returnString += element
        }
    })
    return returnString


}
// Examples:

console.log(camelize("background-color") == 'backgroundColor')
console.log(camelize("list-style-image") == 'listStyleImage')
console.log(camelize("-webkit-transition") == 'WebkitTransition')

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

let arr = [5, 3, 8, 1];
function filterRange(arr,a,b){
    
    return arr.filter(element =>{
        return (a <= element && element <= b)
    })
}

let filtered = filterRange(arr, 1, 4);

// Compare arrays by their string representation
console.log(filtered.toString() === [3,1].toString()); // true if matching values

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

let qarr = [5, 3, 8, 1];
function filterRangeInPlace(arr,a,b){
    arr.forEach((element,index)=>{
        if (element > b || element < a){
            arr.splice(index,1)
        }
    })
}
filterRangeInPlace(qarr, 1, 4); // removed the numbers except from 1 to 4

console.log( qarr ); // [3, 1]

// Sort in decreasing order
// importance: 4

let warr = [5, 2, 1, -10, 8];

warr.sort((a,b)=>b-a)
// ... your code to sort it in decreasing order

console.log( warr ); // 8, 5, 2, 1, -10

// Copy and sort array
// importance: 5

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let earr = ["HTML", "JavaScript", "CSS"];
function copySorted (arr){
    copyArr = [...arr]
    return copyArr.sort()
}
let sorted = copySorted(earr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( earr ); // HTML, JavaScript, CSS (no changes)

// importance: 5

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(element =>{
    return element.name
})

console.log( names ); // John, Pete, Mary


// Map to objects
// importance: 5

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let usersMapped = users.map(element=>{
    return {fullName : `${element.name} ${element.surname}`, id: element.id}
})

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith