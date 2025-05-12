// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let myString = "this is a sentence"
if (myString[myString.length -1] == "?"){
    alert(myString)
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let myNewString = "this is a string with jr. dev, jr. dev, and jr. dev"
console.log(myNewString.replaceAll("jr. dev","software engineer"))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    roll = Math.random()
    if (roll < 0.33){
        return 'rock'
    }
    if (roll < 0.66){
        return 'paper'
    }
    return 'scissors'
}
console.log(rockPaperScissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRockPaperScissors(choice){
    botRoll = rockPaperScissors()
    if (choice == botRoll){
        return 'its a tie!'
    }
    if ((choice === 'rock'&& botRoll === "paper")||(choice === 'paper'&& botRoll === 'scissors')||(choice === 'scissors'&& botRoll === 'rock')){
        return 'you lose'
    }
    return 'you win!'
}
console.log(playRockPaperScissors('rock'))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let myChoices = ['rock', 'paper', 'scissors']
function playManyGames(arr){
    arr.forEach((choice) => console.log(playRockPaperScissors(choice)));
}
playManyGames(myChoices)