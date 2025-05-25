//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseList(array){
    return array.reverse()
}
console.log(reverseList([22, -6, 32, 82, 9, 25]))
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function aGreaterThanb(arr1,arr2){
    arr1sum = arr1.reduce((acc,c) => acc+c**2,0)
    arr2sum = arr2.reduce((acc,c) => acc += c**3,0)
    return arr1sum>arr2sum
}
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function specialNumber(arr){
    return arr.filter((element,index) =>{
         if (element % index == 0){
            return element
         }
    })
}
console.log(specialNumber([68, -1, 1, -7, 10, 10]))
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfAll(arr){
    return arr.reduce((acc,c) => acc += Number(c),0 )
}
console.log(sumOfAll([22, -6, '32', 82, 9, '25']))