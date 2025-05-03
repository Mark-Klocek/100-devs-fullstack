//3 2 1 code

function nameAge(name,age){
    console.log(`My name is ${name} and I am ${age} years old.`)
}

function simpleCalculator(){
    console.log(6+3)
    console.log(6-3)
    console.log(6*3)
    console.log(6/3)
}


//play with variables

// let firstName = prompt('What is your first name?')
// let lastName = prompt('What is your last name?')
// console.log(`His name is ${firstName} ${lastName}`)
function calcVat(n1){
    return n1*1.26
}
function celciusToFarenheit(){
    let celcius = prompt('What temperature is it in C?')
    alert(`${celcius * (9/5) + 32} Farenheit`)
}
let number1 = 5;
let number2 = 3;

let temp = number1
number1 = number2
number2 = temp

//add conditions

function dayName(day){
    day = String(day)
    if (day.toLowerCase() == 'monday'||day.toLowerCase() == 'tuesday'||day.toLowerCase() == 'wednesday'||day.toLowerCase() == 'thursday'||day.toLowerCase() == 'friday'||day.toLowerCase() == 'saturday'||day.toLowerCase() == 'sunday'){
        console.log(day)
    }
    else{
        alert('incorrect format. please enter a day of the week')
    }
}

function compareNums(n1,n2){
    if (n1>n2){
        alert(`${n1} is greater than ${n2}`)
    }
    else if (n2>n1){
        alert(`${n2} is greater than ${n1}`)
    }
    else{
        alert(`${n1} and ${n2} are equal`)
    }
}

function daysInAMonth(n1){
    if (n1 == 1||n1 == 3||n1 == 5||n1 == 7||n1 == 8||n1 == 10||n1 == 12){
        alert('There are 31 days in this month')
    }
    else if (n1 == 4||n1 == 6||n1 == 9||n1 == 11){
        alert('There are 30 days in this month')
    }
    else if (n1 == 2){
        alert('There are 28 days this month')
    }
    else{
        alert('incorrect input. please select from 1-12')
    }
}

function addOneSecond(hour,minute,second){
    if ((hour < 0 || hour > 23)||(minute < 0 || minute > 59)||(second < 0 || second > 59)){
        alert('Invalid input, please enter a valid time 0:0:0 -> 23:59:59')
        return
    }
    second += 1
    if(second == 60){
        minute += 1
        second = 0

    }
    if (minute == 60){
        hour +=1
        minute = 0
    }
    if (hour == 24){
        hour = 0
        minute = 0
        second = 0
        
    }
    return(`${hour}h:${minute}m:${second}s`)
}

// repeat statements

function carouselFor(n1){
    for(i=1; i<=n1;i++){
        console.log(`We have spun ${i} times.`)
    }

}

function carouselWhile(n1){
    i = 1
    while (i <= n1){
        console.log(`We have spun ${i} times`)
        i++
    }
}
function parityFor(n1){
   
    for(i = 1; i <= n1; i++){
        if (i % 2 == 0){
            console.log(`${i} is even`)
        }
        else{
            console.log(`${i} is odd`)
        }
    }
}
function parityWhile(n1){
    let i = 1
    while (i <= n1){
        if (i % 2 == 0){
            console.log(`${i} is even.`)
        }
        else{
            console.log(`${i} is odd.`)
        }
        i++
    }
}
function inputValidation(){
    let num = prompt('please enter a number less than 101 and greater than 49')
    while (num >= 100 || num <= 50){
        num = prompt('please enter a number less than 101 and greater than 49')
    }
}

function multiplicationTable(){
    let num = prompt('please enter a number between 2 and 9')
    while(num < 2 || num > 9){
        num = prompt('please enter a number between 2 and 9')
    }
    for(i = 1; i<= 10;i++){
        console.log(`${num} * ${i} = ${num * i}`)
    }
}

function fizzBuzz(){
    for (i = 1; i <= 100; i++){
        if (i % 5 == 0 && i % 3 == 0){
            console.log(`${i} is FIZZBUZZ!`)
        }
        else if ( i % 5 == 0 && i % 3 != 0){
            console.log(`${i} is BUZZ!`)

        }
        else if (i % 3 == 0){
            console.log(`${i} is FIZZ!`)
        }
    }
}