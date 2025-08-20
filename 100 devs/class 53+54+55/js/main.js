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

