//Create a constructor with 4 properties and 3 methods
function Pizza(shape,size,toppings,price) {
    this.shape = shape
    this.size = size
    this.toppings = toppings
    this.price = price

    sayPrice = function (){
        return `Your pizza cost $${this.price}`

    }
    description = function(){
        return `You ordered a ${this.size} pizza with ${this.toppings} toppings.`
    }
}

let myPizza = new Pizza('square','small',['cheeze','meat','veggies'],10)

console.log(myPizza.toppings)
