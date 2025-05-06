document.getElementById('gameBoard').addEventListener('click', playerClicksSquare)

let currentSelection = 2
function playerClicksSquare(e){
    console.log(e.target.id)
    if (e.target.style.backgroundImage !== ""){
        ""
    }
    else if (currentSelection == 1){
        e.target.style.backgroundImage = "url(o.png)"
        currentSelection = 2
    }
    else if (currentSelection == 2){
        e.target.style.backgroundImage = "url(x.png)"
        currentSelection = 1
    }
    
    
    
}

