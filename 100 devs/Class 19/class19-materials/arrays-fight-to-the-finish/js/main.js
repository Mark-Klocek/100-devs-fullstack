//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Inception", "The Matrix", "Pulp Fiction", "The Godfather", "Interstellar"];
movies.forEach((x,i)=>document.querySelector('h2').innerHTML += `<span>${x}</span><br>`)
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [3, 7, 12, 5, 9, 21, 4, 18, 0, 11];
numbers.forEach((x,i)=> numbers[i] = numbers[i] + 3)
console.log(numbers)
//Find the average of all the numbers from question three
let total = 0
numbers.forEach((x,i)=> total += x)
console.log(total / numbers.length)