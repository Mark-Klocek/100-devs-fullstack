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
