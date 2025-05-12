//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProSkater(shoes,board,trucks,wheels){
    this.shoes = shoes;
    this.board = board;
    this.trucks = trucks;
    this.wheels = wheels;
    this.doTrick = function(){
        console.log('You did a kick flip!')
    };
    this.falconPunch = function(){
        console.log('You just falcon punched that guy!')
    };
    this.pushPushKick = function(){
        console.log('Push...push..kick... man you"re cruisin')
    }
}
let tony = new TonyHawkProSkater('vans','normal','tall','small')
tony.falconPunch()
tony.doTrick()
tony.pushPushKick()
console.log(tony)