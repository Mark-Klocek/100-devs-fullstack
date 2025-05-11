//Arrays
myArray = [32,32,32,42,42,4223,4,234,432,234]
//Create and array of numbers. Sum all of the numbers. Alert the sum.
//alert(myArray.reduce((sum,num) => sum+= num,0))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArray = myArray.map(element => element ** 2)
console.log(newArray)
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString('This is my string, dawg'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(string){
    for(i = 0; i<= string.length - 1 / 2;i++){
        if (string[i] !== string[string.length - 1 - i]){
            return 'not a palindrome'
        }
        return 'palindrome'
    }
}
console.log(palindrome('step on no pets live not on evil madam live not on evil step on no pets'))