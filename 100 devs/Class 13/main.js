// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );


// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You cancelled the execution.")
//   );

//carousel problem
let counter = 1;
while (counter <= 10){
    console.log(`The carosel has been launched ${counter} times!`)
    counter ++
}
for (i=1;i <= 10; i++){
    console.log(`The new carosel has been launched ${i} times!`)
}
let uNumber = prompt('How many numbers would you like to check?')


//parity problem
counter = 1
while(counter <= uNumber){
    counter % 2 == 0 ? console.log(`${counter} is even`): console.log(`${counter} is odd`)
    counter ++
}
for(i=1; i<= uNumber;i++){
    i % 2 == 0 ? console.log(`2ndfun ${i} is even`) : console.log(`2ndfun ${i} is odd`)
}

// input validation problem
let between50And100 = prompt('Enter a number between 50 and 100')
while(between50And100 < 50 || between50And100 > 100){
    between50And100 = prompt('Please enter a number between 50 and 100')
}

// multiplication table
let multTable = prompt('Enter a number between 2 and 9 to see the multiplication table')
while(multTable < 2 || multTable > 9){
    multTable = prompt('Please enter a number between 2 and 9')
}
for (i=1; i<= 10; i++){
    console.log(`${multTable} * ${i} = ${multTable * i}`)
}
counter = 1
while(counter <= 10){
    console.log(`${multTable} * ${counter} = ${multTable * counter}`)
    counter ++
}

//Neither yes nor no
//Take in user prompt
// Ask for user prompt until the prompt === 'yes' or prompt === 'no'

uAnswer = prompt('Enter yes or no').toLowerCase()
while (uAnswer != 'yes' && uAnswer != 'no'){
    uAnswer = prompt("The game won't end until you enter either yes or no").toLowerCase()
}

for(let uWhileAnswer = prompt('Enter Yes or No').toLowerCase(); uWhileAnswer != 'yes' && uWhileAnswer != 'no'; uWhileAnswer = prompt("The game won't end until you answer yes or no").toLowerCase()){}

//FizzBuzz
//all numbers between 1 and 100
// if number is divisible by 3 it shows Fizz
// if number is divible by 5 and not 3, it shows Buzz
// show FizzBuzz for numbers that are divisible by both 5 and 3

counter = 1
while(counter <= 100){
    if (counter % 5 === 0 && counter % 3 ===0){
        console.log(`${counter} is FIZZBUZZ!`)
    }
    else if (counter % 5 === 0 && counter % 3 !==0){
        console.log(`${counter} is BUZZ!`)
    }
    else if (counter % 3 ===0){
        console.log(`${counter} is FIZZ!`)
    }
    counter ++
}
for(let i = 1; i <= 100; i++){
    if (counter % 5 === 0 && counter % 3 ===0){
        console.log(`${counter} is FIZZBUZZ!`)
    }
    else if (counter % 5 === 0 && counter % 3 !==0){
        console.log(`${counter} is BUZZ!`)
    }
    else if (counter % 3 ===0){
        console.log(`${counter} is FIZZ!`)
    }
}