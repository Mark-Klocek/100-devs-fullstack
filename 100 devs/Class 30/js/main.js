class Vec{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    plus(obj){
        return new Vec(obj.x+this.x,obj.y+this.y)
    }
    minus(obj){
        return new Vec(this.x-obj.x,this.y-obj.y)
    }
    get length(){
        return Math.sqrt(this.x**2+this.y**2)
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
console.log(new Vec(3, 12).length);

class Group{
    constructor(arr=[]){
        this.arr = arr
    }
    static from(arr){
        let group = new Group()
        for (let i=0;i<arr.length;i++){
            group.add(arr[i])
        }
        return group
    }
    add(n){
        if (!this.arr.includes(n)){
            this.arr.push(n)
        }
    }
    delete(n){
        if (this.arr.includes(n)){
            delete this.arr[this.arr.indexOf(n)]
        }
    }
    has(n){
        return this.arr.includes(n)
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
class Dog{
    constructor(name,type,size){
        this.name = name
        this.species = type
        this.size = size
    }
    bark(){
        return this.size > 60 ? `Grrr! Grrr!`:`Woof! Woof!`
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
    this.inventory = {
        'gold':10,
        'keys':1
    }
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points\n They also gain ${target.inventory.gold}g and ${target.inventory.keys}keys from ${target.name}!`
        );
        this.inventory.gold += target.inventory.gold
        this.inventory.keys += target.inventory.keys
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can’t attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points \n His current inventory includes ${this.inventory.gold}g and ${this.inventory.keys}key(s)`;
  }
}

let mark = new Character('Mark',200,50)
let russ = new Character('Russell',50,0)
console.log(mark.describe())
console.log(russ.describe())
mark.attack(russ)
console.log(mark.describe())

class Account{
    constructor(name){
        this.balance = 0
        this.name = name
    }
    credit(n){
        this.balance += n
    }
    describe(){
        return `This account belongs to ${this.name}. He/she currently has $${this.balance} in their account.`
    }
}

bankMembers = [new Account('Sean'),new Account('Brad'),new Account('Georges')]

for (member of bankMembers){
    member.credit(1000)
    console.log(member.describe())
}