document.querySelector('button').addEventListener('click', addAnothaOne)
if (!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)

}

function addAnothaOne(){
    let botScoreVal = localStorage.getItem('botScore')
    botScoreVal ++
    localStorage.setItem('botScore',botScoreVal)
    document.querySelector('h2').innerText = localStorage.getItem('botScore')
    console.log(localStorage.getItem('botScore'))
}

