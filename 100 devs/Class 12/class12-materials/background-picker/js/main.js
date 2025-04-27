// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue
// document.getElementById('gray').onclick = partyGray

// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGray(){
//   document.querySelector('body').style.backgroundColor = 'gray'
//   document.querySelector('body').style.color = 'black'
// }
document.getElementById('purple').onclick = turnPurple
document.getElementById('green').onclick = turnGreen
document.getElementById('blue').onclick = turnBlue
document.getElementById('gray').onclick = turnGray


function turnPurple(){
  document.querySelector('body').style.backgroundColor = 'purple'
  document.querySelector('body').style.color = 'green'
}
function turnGreen(){
  document.querySelector('body').style.backgroundColor = 'green'
  document.querySelector('body').style.color = 'red'
}
function turnBlue(){
  document.querySelector('body').style.backgroundColor = 'blue'
  document.querySelector('body').style.color = 'white'
}
function turnGray(){
  document.querySelector('body').style.backgroundColor = 'gray'
  document.querySelector('body').style.color = 'blue'
}
