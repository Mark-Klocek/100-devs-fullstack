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