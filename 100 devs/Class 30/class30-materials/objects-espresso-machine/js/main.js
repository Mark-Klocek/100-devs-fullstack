//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
    constructor(size,caffeine,price,drink){
        this.size = size
        this.caffeine = caffeine
        this.price = price
        this.drink = drink
    }

    saySize(){
        return `You ordered a ${this.size} drink`
    }

    sayCaffeine(){
        return `Your drink has ${this.caffeine}mg of caffeine`
    }

    sayPrice(){
        return `You owe $${this.price}`
    }
    
    sayFullOrder(){
        return `You've ordered a ${this.size} ${this.drink} which has ${this.caffeine}mg of caffeine. That'll cost you $${this.price}`
    }

}

let myCoffee = new EspressoMachine('Large','300','6.50','Espresso')

console.log(myCoffee.sayFullOrder())