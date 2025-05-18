document.querySelector('button').addEventListener('click',drinkName)

function drinkName(){
    let newDrinkName = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newDrinkName}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    console.log(data.drinks[0])
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}




