document.querySelector('button').addEventListener('click', playWar)
document.getElementById('shuffle').addEventListener('click',shuffleCards)

if (localStorage.getItem('deckId') == null){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            localStorage.setItem('deckId',`${data.deck_id}`)
            
        })
}
console.log(localStorage.getItem('deckId'))      
function playWar(){
  const deck = localStorage.getItem('deckId')
  const url = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('player1').src = data.cards[0].image
        document.getElementById('player2').src = data.cards[1].image
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
function shuffleCards(){
    const deck = localStorage.getItem('deckId')
    const url = `https://deckofcardsapi.com/api/deck/${deck}/shuffle/`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err=>{
            console.log(`error ${err}`)
        })
}