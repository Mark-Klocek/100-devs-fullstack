//Arrays

//Create and array of tv shows. Loop through and print each show to the console
rMovies = ['movie1','movie2','movie3','movie4']
rMovies.forEach(element => console.log(element));
//Create and array of numbers
nArray = [5,23,1,23,54,234,23]
//Return a new array of numbers that includes every even number from the previous Arrays

let newArray = arr => arr.filter(n => n % 2===0)
console.log(newArray(nArray))
// function eArray(arr){
//     let newArray = []
//     for (i = 0; i< arr.length;i++){
//         if (arr[i]%2 ==0){
//             newArray.push(arr[i])

//         }
//     }
//     return newArray
// }
// console.log(eArray(nArray))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
// function newNum(arr){
    
//     return (arr[1] + arr.slice(-2)[0])
// }
// console.log(newNum(nArray))
let sArray = nArray.sort((a,b) => a-b)
console.log(sArray)
function leastAndGreatest(arr){
    console.log(arr[1]+arr[arr.length - 2])
}
leastAndGreatest(sArray)