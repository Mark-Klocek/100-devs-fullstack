document.querySelector('#yell').addEventListener('click', tConverter)


function tConverter(){
    const uTemp = document.querySelector('#Centigrade').value
    const fTemp = uTemp * (9/5) + 32
    document.getElementById("placeToYell").innerText = fTemp
}
