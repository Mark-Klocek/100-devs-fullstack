//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenArray(arr){
    let newArray = []
    for (i=0;i<arr.length;i++){
        if (arr[i] % 2 == 0){
            newArray.push(arr[i])
        }
    }
    return newArray
}

nums = [23,12,32,54,23,23,123,32,12]
console.log(evenArray(nums))