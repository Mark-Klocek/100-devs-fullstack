//Create a dog object that has four properties and three methods
let dog = {}
dog.color = 'Black'
dog.breed = 'Boxer'
dog.tail = 'Long'
dog.collar = true
dog.bark = function(){
    console.log(`the ${dog.color} dog BARKS!`)
}
dog.sniff = function(){
    console.log(`the dog smells something.... sniff sniff sniff`)
}

dog.bark()
dog.color = 'brown'
dog.bark()