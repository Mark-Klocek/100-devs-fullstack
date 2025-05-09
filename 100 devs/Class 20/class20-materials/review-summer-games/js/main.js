//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyFunc(n1){
    newArr = n1.reduce((newObj,element) => {
        return newObj *= element
    },1)
    alert(newArr)
}
arr=[32,23,12,31]

multiplyFunc(arr)