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