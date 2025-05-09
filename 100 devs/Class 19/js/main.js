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

let arr = [5, 3, 8, 1]
function filterRange(arr,a,b){
    let array = arr.filter(item => item <= a || item >=b);
    console.log(array)

}

filterRange(arr,2,5)