//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    'color' : 'black',
    'buttonCount': 3,
    'wristWrapLength' : 8,
    'watchShape': 'square',
    tellColor(){
        console.log(stopwatch.color)

    },
    tellShape(){
        console.log(stopwatch.watchShape)

    },
    tellButtonCount(){
        console.log(stopwatch.buttonCount)

    }
}
stopwatch.tellColor()
stopwatch.tellShape()
stopwatch.tellButtonCount()