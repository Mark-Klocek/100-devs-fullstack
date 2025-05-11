//Create a mouse object that has four properties and three methods
let Mouse = {
    'buttonRight':  'white',
    'buttonLeft': 'black',
    'isWired?': 'no',
    'numOfButtons': 2,
    howManyButtons(){
        console.log(`We have ${Mouse.numOfButtons} buttons`)
    },
    isItWired(){
        console.log(`Is thise mouse wired? ${Mouse["isWired?"]}`)
    }

}
Mouse.isItWired()
Mouse["isWired?"] = 'yes'
Mouse.isItWired()