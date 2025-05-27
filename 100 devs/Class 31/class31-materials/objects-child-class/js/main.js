class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Horse extends Animal{
    constructor(name,speed,age,sex){
        super(name)
        this.speed = speed
        this.age = age
        this.sex = sex
    }

    speedCheck(){
        return this.speed > 20 ? `This is a fast horse!` : `This horse needs some work.`
    }

    describe(){
        return `${this.name} is a ${this.age} year old ${this.sex} horse. ${this.speedCheck()} `
    }
}

let molly = new Horse('Molly',25,4,'female')

console.log(molly.describe())

let ralph = new Horse('Ralph',5,2,'male')

console.log(ralph.describe())