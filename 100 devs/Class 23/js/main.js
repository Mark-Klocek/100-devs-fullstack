class CreateCircle {
    constructor(radius){
        this.radius = radius
    
        this.pacman = function(){
            console.log('This is the pacman method')
    }
}
}

let circle = new CreateCircle(10)
console.log(circle.radius, circle.pacman())