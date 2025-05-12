//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreeTFighter(name,skill,life,damage){
    this.Name = name
    this.skill = skill
    this.totalHp = life
    this.hitDamage = damage
}

let Ken = new StreeTFighter('Ken', 'kick',200,30)
console.log(Ken)