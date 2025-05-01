//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector("#help").addEventListener('click', stop)


function stop(){
    document.querySelector("#stops").innerHTML = ''
    let snacks = document.querySelector('input').value
    for (i = 1; i <= snacks; i++){
        document.querySelector("#stops").innerHTML += ' STOP! '
    }
}