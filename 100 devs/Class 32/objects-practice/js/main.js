// // Come up with with a parent class
// // Extend that parent class into two children
// // Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }


class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get role(){
        return this._role
    }

    set role(n){
        this._role = n
    }
    get name(){
        return this._name
    }
    sayHi(){
        return `Hi I'm ${this.name} and my role is ${this.role}`
    }
}

class Frontend extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHi(){
        return `Hi I'm ${this.name} and my role is ${this.role}, my current tech stack is ${this.tech}`
    }
}

class Backend extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech     
    }
    sayHi(){
        return `This is polymorphism. I'm changing the inherited method to this!`
    }
}
    

let mark = new Contractor('mark','nothing')
let luke = new Frontend('luke','front-end','HTML, CSS, REACT')
let paul = new Backend('paul','back-end','NODE, EXPRESS, SQL')
console.log(mark.sayHi())
console.log(luke.sayHi())
console.log(paul.sayHi())