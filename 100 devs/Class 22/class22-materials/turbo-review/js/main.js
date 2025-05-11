// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
favDrink = 'Water'
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
myString = "this is a string of multiple words"
stringAsArray = myString.split(' ')
function isApple(arr){
    return arr.includes('apple')
}
myString.search('apple') > -1 ? console.log('yes'):console.log('no')
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    num = Math.random()
    if (num < 0.33){
        return('rock')
    }
    else if (num < 0.66){
        return('paper')
    }
    else {
        return('scissors')
    }
}
rockPaperScissors()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rockPaperScissorChecker(choice,func){
    if (choice == 'rock' && func == 'paper'){
        return 'You lose'
    }
    if (choice == 'rock' && func == 'scissors'){
        return 'You win'
    }
    if (choice == 'paper' && func == 'scissors'){
        return 'You lose'
    }
    if (choice == 'paper' && func == 'rock'){
        return 'You win'
    }
    if (choice == 'scissors' && func == 'rock'){
        return 'You lose'
    }
    if (choice == 'scissors' && func == 'paper'){
        return 'You win'
    }
    return "it's a tie!"
}
console.log(rockPaperScissorChecker('rock',rockPaperScissors()))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function myFunc(arr,func){
    for (i = 0; i < arr.length;i++){
        botChoice = rockPaperScissors()
        console.log(rockPaperScissorChecker(arr[i],botChoice))
    }
}
myChoices = ['rock','paper','paper','rock','scissors','scissors','scissors','scissors','rock']

function playGameXTimes(arr){
    arr.forEach((choice)=> console.log(rockPaperScissorChecker(choice,rockPaperScissors())));
}

console.log(playGameXTimes(myChoices))