// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

//   //Conditionals go here
//   if (day === "tuesday" || day === "thursday"){
//     document.getElementById('placeToSee').innerText = "Class Day"
//   }
//   else if (day === "saturday" || day === "sunday"){
//     document.getElementById('placeToSee').innerText = "Fun Day"
//   }
//   else{
//     document.getElementById('placeToSee').innerText = "Boring Day"
//   }
// }

document.querySelector('#check').addEventListener('click', dayChecker)


function dayChecker(){
  const day = document.getElementById('day').value.toLowerCase()
  if (day === "tuesday" || day === "thursday"){
    document.getElementById('placeToSee').innerText = "Class Day"
    document.getElementById('placeToSee').style.color = "green"
  }
  else if (day === "saturday" || day === "sunday"){
    document.getElementById('placeToSee').innerText = "Weekend"
    document.getElementById('placeToSee').style.color = "purple"
  }
  else{
    document.getElementById('placeToSee').innerText = "Boring Day"
    document.getElementById('placeToSee').style.color = "red"
  }
}