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

