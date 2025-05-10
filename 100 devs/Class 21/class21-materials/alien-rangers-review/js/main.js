//Arrays

//Create and array of tv shows. Loop through and print each show to the console
rMovies = ['movie1','movie2','movie3','movie4']
for (i=0;i<rMovies.length;i++){
    console.log(rMovies[i])
}
//Create and array of numbers
nArray = [5,23,1,23,54,234,23]
//Return a new array of numbers that includes every even number from the previous Arrays
function eArray(arr){
    let newArray = []
    for (i = 0; i< arr.length;i++){
        if (arr[i]%2 ==0){
            newArray.push(arr[i])

        }
    }
    return newArray
}
console.log(eArray(nArray))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function newNum(arr){
    
    return (arr[1] + arr.slice(-2)[0])
}
console.log(newNum(nArray))