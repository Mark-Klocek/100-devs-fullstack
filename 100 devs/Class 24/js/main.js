let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name
console.log(user)
let schedule = {};
schedule["8:30"] = "get up";
function isEmpty(obj){
    return Object.keys(obj).length == 0
}
console.log(isEmpty(schedule))
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (key in salaries){
    sum += salaries[key]
}
console.log(sum)
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu){
    for (key in menu){
        if (!isNaN(menu[key])){
            menu[key] *= 2
        }
    }
    return menu
}
console.log(multiplyNumeric(menu))
let Calculator = {
    read(a,b) {
        this.a = a
        this.b = b
    },
    sum(){ 
        return (this.a + this.b)

    },
    mul(){
        return this.a * this.b
    }
}
Calculator.read(12,2)
console.log(Calculator.sum())
console.log(Calculator.mul())
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0