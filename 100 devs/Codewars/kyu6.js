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