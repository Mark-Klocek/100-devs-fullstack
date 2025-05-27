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