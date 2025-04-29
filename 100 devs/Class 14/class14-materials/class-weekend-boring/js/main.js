//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    document.getElementById("placeToSee").innerText = 'YOU HAVE CLASS!'
  }else if( day === "saturday" || day === "sunday"){
    document.getElementById("placeToSee").innerText = 'WEEKEND BABY!'
  }else{
    document.getElementById("placeToSee").innerText = 'boooooorrrrinnngggggg'
  }

}
