// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
// document.querySelector('#homeworkAddition').addEventListener('click',add11)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }
// function add11(){
//   total += 11
//   document.querySelector('#placeToPutResult').innerHTML = total
// }
let result = 0

document.querySelector('#pumpkin').addEventListener('click',zero)
document.querySelector('#dominosPizza').addEventListener('click',addThree)
document.querySelector('#zebra').addEventListener('click',addNine)
document.querySelector('#cantThinkOfAnything').addEventListener('click', minusTwo)
document.querySelector('#homeworkAddition').addEventListener('click',addEleven)


function zero(){
  result = 0
  document.querySelector('#placeToPutResult').innerHTML = result
  document.getElementById('placeToPutResult').style.color = 'red'

}
function addThree(){
  result += 3
  document.querySelector('#placeToPutResult').innerHTML = result
  document.getElementById('placeToPutResult').style.color = 'green'
}
function addNine(){
  result += 9
  document.querySelector('#placeToPutResult').innerHTML = result
  document.getElementById('placeToPutResult').style.color = 'green'
}
function minusTwo(){
  result -= 2
  document.querySelector('#placeToPutResult').innerHTML = result
  document.getElementById('placeToPutResult').style.color = 'red'
  
}
function addEleven(){
  result += 11
  document.querySelector('#placeToPutResult').innerHTML = result
  document.getElementById('placeToPutResult').style.color = 'green'
}