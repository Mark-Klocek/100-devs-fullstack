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