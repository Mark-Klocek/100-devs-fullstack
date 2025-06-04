//
//5-28-25
//
//5 kyu Moving Zeroes To The End
function moveZeros(arr) {
    let nonZeroArray = []
    let zeroArray = []
    arr.forEach((element,index)=>element === 0 ? zeroArray.push(element):nonZeroArray.push(element))
    zeroArray.forEach(element => nonZeroArray.push(element))
    return nonZeroArray
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
//6 kyu Simple Sentences
function makeSentence(parts) {
    parts.forEach((element,index) => {
        
        if (element.length === 1 && (element < 'a' || element > 'Z') && isNaN(Number(element)) && element != '.'){
            console.log(`${element}: ${index}: ${typeof element}`)
            parts[index -1] = parts[index -1] += element
            parts.splice(index,1)
        }
    })
    
    let sentence = parts.join(' ')
    while (sentence.endsWith('.') || sentence.endsWith(' ')){
        sentence = sentence.slice(0,-1)
    }
    
    return sentence+'.'
    
}

console.log(makeSentence(['4','4',4, ',', 'my', 'dear','.','.','.']))

//6 kyu Sentence Calculator
function lettersToNumbers(s) {
    letterArray = []
    s.split('').forEach(element => {
        if ((element >= 'A' && element <= 'Z') || (element >= 'a' && element <= 'z')){
            letterArray.push(element)
        }
        else if (!isNaN(Number(element))){
            letterArray.push(element)
        }
    })
    accumulator = 0
    letterArray.forEach(element => {
        if (element >= 'A' && element <= 'Z'){
            accumulator += (element.toLowerCase().charCodeAt(0) - 96) * 2
        }
        else if (element >= 'a' && element <= 'z'){
            accumulator += (element.toLowerCase().charCodeAt(0) - 96)
        }
        else if (!isNaN(Number(element))){
            accumulator += Number(element)
        }
        else{
            ''
        }
    })
    return accumulator
}

console.log(lettersToNumbers("Give me 5!"))

//6 kyu Hyper Sphere
function inSphere(coords, radius) {
  if (coords.length > 0){
    return coords.reduce((acc,c) => acc+= c**2,0) <= radius**2;
  }
  return true
}
console.log(inSphere([66.14272,66.57249,0.42063,48.18087,15.88034,15.90368], 90))

//
//5-28-25
//
// 6 kyu Convert integer to Whitespace format
function whitespaceNumber(n) {
    returnString = ''
    if (n > 0) returnString += ' '
    
    nBinary = n.toString(2)
    if (n < 0) {
        nBinary = nBinary.slice(1)
        returnString += '\t'
    }

    nBinary.split('').forEach((element)=> element == '1'? returnString+= '\t':returnString+= ' ')
    return returnString += '\n';
  }
console.log((whitespaceNumber(0)))
// 6 kyu Most Consecutive Zeros of a Binary Number
function maxConsecZeros(n){
    const numbersToWords = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty"
    }
  nBinary = Number(n).toString(2)
  binaryList = nBinary.split('')
  currentStreak = 0
  highestStreak = 0
  console.log(binaryList)
  binaryList.forEach((element) => {
  if (element === '0') {
    currentStreak++;
  } else {
    highestStreak = Math.max(highestStreak, currentStreak);
    currentStreak = 0;
  }
})
  
  highestStreak =  Math.max(currentStreak,highestStreak)
  return numbersToWords[highestStreak]
}
console.log(maxConsecZeros("180"))
//6 kyu Create a frame!
const frame = (text, char) => {
  lengthArray = text.map(element => element.length)
  longestWord = lengthArray.sort((a,b)=>b-a)[0]
  topAndBottomBorder = ''
  returnString = ''
  for (i=0;i<longestWord+4;i++){
    topAndBottomBorder += char
  }
  
  returnString += topAndBottomBorder + '\n'
  text.forEach(element => {
    returnString += `${char} ${element} `
    elementLength = element.length
    while (elementLength < longestWord){
        returnString += ' '
        elementLength ++
    }
    returnString += `${char}\n`
  })
  return returnString += `${topAndBottomBorder}`
};
console.log(frame(['Small','frame'], '+'))
//6 kyu Frequency Analysis With Buckets

function bucketize(arr) {
  let obj = {};
  arr.forEach((element) => {
    if (obj[element]) {
      obj[element] += 1;
    } 
    else {
      obj[element] = 1;
    }
  });
  returnArray = []
  for (i=0;i<=arr.length;i++){
    returnArray.push(null)
  }
  for (pairs in obj){
    if(returnArray[obj[pairs]] == null){
        returnArray[obj[pairs]] = [Number(pairs)]
    }
    else{
        returnArray[obj[pairs]].push(Number(pairs))
    }
  }
  return returnArray;
}

inputArrTwo = [4,4,8,8]
console.log(bucketize(inputArrTwo))
//
//5-29-25
//
// 7kyu Genetic Algorithm Series - #3 crossover
const crossover = (chromosome1, chromosome2, index) => {
  
return [
    chromosome1.slice(0,index)+chromosome2.slice(index),
    chromosome2.slice(0,index)+chromosome1.slice(index)
]
};

console.log(crossover('0000011111','1111100000',5))
//7 kyu count the ones
function hammingWeight(x){
  count = 0
  x.toString(2).split('').forEach(element=> element === '1' ? count ++:'')
  return count
}
console.log(hammingWeight(10))
//
//5-28-25
//
//8 kyu Neutralisation
function neutralise(s1, s2) {
  returnStr = ''
  s1 = s1.split('')
  s2 = s2.split('')
  s1.forEach((element,index) => {
    if (element === '-' && s2[index] === '-'){
      returnStr += '-'
    }
    else if (element === '+' && s2[index] === '+'){
      returnStr += '+'
    }
    else{
      returnStr += '0'
    }
  })
  return returnStr;
  
}

console.log(neutralise("--++--", "++--++"))

//7 kyu coding meeting #2 - higher-order function series - greet developers
const peopleList = [
      {
        firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
      },
      {
        firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
      },
      {
        firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
      },
    ];
function greetDevelopers(list) {
  
  for (people of list){
    people.greeting = `Hi ${people.firstName}, what do you like the most about ${people.language}?`
  }
  return list
}

console.log(greetDevelopers(peopleList))

//6 kyu digit racers
function digitRacers(str) {
  const count = {};
  const lastIndex = {};

  
  for (let i = 0; i < str.length; i++) {
    const digit = str[i];
    count[digit] = (count[digit] || 0) + 1;
    lastIndex[digit] = i;
  }

  
  const entries = Object.keys(count).map(d => [d, count[d], lastIndex[d]]);

  
  entries.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];       
    return b[2] - a[2];                           
  });

  
  let rankingMap = {};
  let rank = 1;
  let lastCount = null;

  for (let i = 0; i < entries.length; i++) {
    const [digit, cnt] = entries[i];

    if (cnt !== lastCount) {
      rank = Object.keys(rankingMap).length + 1;
      lastCount = cnt;
    }

    if (!rankingMap[rank]) rankingMap[rank] = [];
    rankingMap[rank].push(digit);
  }

  
  const suffix = n =>
    n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`;

  const lines = [];

  for (let i = 1; rankingMap[i]; i++) {
    lines.push(`${suffix(i)} place: ${rankingMap[i].join(", ")}`);
  }

  
  const present = new Set(Object.keys(count));
  const absent = [];
  for (let i = 0; i <= 9; i++) {
    const d = i.toString();
    if (!present.has(d)) absent.push(d);
  }

  if (absent.length > 0) {
    lines.push(`Absent digits: ${absent.join(", ")}`);
  } else {
    lines.push("All digits present");
  }

  return lines.join("\n");
}


console.log(digitRacers("5501234567789"))

//7kyu dot calculator
function dotCalculator(equation) {
  const [left, operator, right] = equation.split(' ');
  const a = left.length;
  const b = right.length;

  switch (operator) {
    case '+':
      return '.'.repeat(a + b);
    case '-':
      return '.'.repeat(a - b);
    case '*':
      return '.'.repeat(a * b);
    case '//':
      return '.'.repeat(Math.floor(a / b));
    default:
      return '';
  }
}
//8 kyu crash override
function aliasGen(first, last) {
  const f = first[0].toUpperCase();
  const l = last[0].toUpperCase();

  if (!/^[A-Z]$/.test(f) || !/^[A-Z]$/.test(l)) {
    return "Your name must start with a letter from A - Z.";
  }

  return `${firstName[f]} ${surname[l]}`;
}
//
//6-1-25
//
// 8kyu pirates!! Are the cannons ready!??
function cannonsReady(gunners) {
  return Object.values(gunners).every(answer => answer === 'aye')
    ? 'Fire!'
    : 'Shiver me timbers!';
}
// 8kyu [BUG] XCOM-409: Flight distance of Interceptor planes is miscalculated
function travelDistance(avgSpeed, travelTime) {
  const KM_PER_NAUTICAL_MILE = 1.852;
  const travelHours = travelTime / 60;
  const travelNauticalMiles = avgSpeed * travelHours;
  const travelKms = travelNauticalMiles * KM_PER_NAUTICAL_MILE;

  return travelKms;
}
//8 kyu welcome to the city
function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}
// 8 yu are they opposite?
function isOpposite(s1, s2) {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;
  return s1.split('').every((char, i) => char !== s2[i] && char.toLowerCase() === s2[i].toLowerCase());
}
//8 kyu generate user links
function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

//
//6-2-25
//
//8 kyu incorrect division method
const solve = (x, y) => x / y

//8 kyu  Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
  return +(2 * Math.PI * circle.radius).toFixed(6);
}

//8 kyu Points of Reflection
function symmetricPoint(p, q) {
  return [2 * q[0] - p[0], 2 * q[1] - p[1]];
}

//8 kyu remove
function remove(string) {
  return string.replace(/!+$/, '');
}


//8 kyu grasshopper
function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
//
//6-3-25
//
// keep hydrated
function litres(time) {
  return Math.floor(time * 0.5);
}
// making six
function sixToast(num) {
  return Math.abs(num - 6);
}
// draw stairs
function drawStairs(n) {
  let stairs = '';
  for (let i = 0; i < n; i++) {
    stairs += ' '.repeat(i) + 'I';
    if (i !== n - 1) stairs += '\n';
  }
  return stairs;
}
//drink about
function peopleWithAgeDrink(age) {
  if (age < 14) return "drink toddy";
  if (age < 18) return "drink coke";
  if (age < 21) return "drink beer";
  return "drink whisky";
}
// hq9
function HQ9(code) {
  if (code === 'H') return 'Hello World!';
  if (code === 'Q') return code;
  if (code === '9') {
    let song = '';
    for (let i = 99; i > 0; i--) {
      song += `${i} bottle${i > 1 ? 's' : ''} of beer on the wall, ${i} bottle${i > 1 ? 's' : ''} of beer.\n`;
      if (i - 1 > 0) {
        song += `Take one down and pass it around, ${i - 1} bottle${i - 1 > 1 ? 's' : ''} of beer on the wall.\n`;
      } else {
        song += `Take one down and pass it around, no more bottles of beer on the wall.\n`;
      }
    }
    song += `No more bottles of beer on the wall, no more bottles of beer.\n`;
    song += `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    return song;
  }
  return undefined;
}
//
//6-4-25
//
//8 kyu students final grade
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10){
    return 100
  }
  else if (exam > 75 && projects >= 5){
    return 90
  }
  else if (exam > 50 && projects >= 2){
    return 75
  }
  else{
    return 0
  }
}
console.log(finalGrade(10, 15))