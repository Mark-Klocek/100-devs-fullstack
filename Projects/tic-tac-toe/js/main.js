document.getElementById('gameBoard').addEventListener('click', playerClicksSquare)
document.getElementById('restart').addEventListener('click',clearTheBoard)

let currentSelection = 2
function playerClicksSquare(e){
    console.log(e.target.id)
    if (e.target.classList.contains('square')){
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
    
}

function clearTheBoard(){
    let squares = document.querySelectorAll('.square')
    for(i = 0; i < squares.length;i++){
        squares[i].style.backgroundImage = ''
    }
}