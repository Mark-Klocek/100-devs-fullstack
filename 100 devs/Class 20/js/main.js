
//Adding character experience
const aurora = {
    health : 130,
    strength : 15,
    xp : 0,

    describe (){
        return `Aurora has ${this.health} health points, ${this.strength} as strength, and ${this.xp} XP points`
    }
}

aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//Modeling a dog

const dog = {
    dogName : "Fang",
    species : "boarhound",
    size: 75,
    bark (){
        return 'Grrr! Grrr!'
    }
}
console.log(`${dog.dogName} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.dogName} barks: ${dog.bark()}`);
//modeling a bank account
const account = {
    name : "Alex",
    balance : 0,
    credit(n1){
        this.balance += n1
    },
    describe(){
        return `owner : ${this.name}, balance ${this.balance}`
    }

}
console.log(account.describe())
account.credit(250)
console.log(account.describe())
account.credit(-80)
console.log(account.describe())
//modeling a circle

const r = 9

const circle = {
    circumference(){
        return (r * 2 * Math.PI)
    },
    area(){
        return ((r ** 2) * Math.PI)
    }
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

/// elequent js
// the sum of a range
function range(start,end){
    let arr = []
    for (i=start;i<=end;i++){
        arr.push(i)
    }
    return arr
}
function sum(arr){
    let sum = 0
    for (i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sum(range(1, 10)));