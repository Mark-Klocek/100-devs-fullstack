//Create a dog object that has four properties and three methods
pizza = {}
pizza.shape = 'Round'
pizza.size = 'large'
pizza.toppings = ['pepperoni']
pizza.price = 12.50

pizza.sayPrice = function (){
    return `Your pizza cost $${this.price}`

}
pizza.description = function(){
    return `You ordered a ${this.size} pizza with ${this.toppings} toppings.`
}

console.log(pizza.description())
pizza.toppings.push('anchovies')
console.log(pizza.description())
