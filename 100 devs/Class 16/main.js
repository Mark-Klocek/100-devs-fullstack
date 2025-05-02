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
    }
    second += 1
    if(second > 59){
        minute += 1
    }
    if (minute > 59){
        hour +=1
    }
    if (hour > 23){
        hour = '00'
        minute = '00'
        second = '00'
        console.log(`${hour}:${minute}:${second}`)
    }
    
}