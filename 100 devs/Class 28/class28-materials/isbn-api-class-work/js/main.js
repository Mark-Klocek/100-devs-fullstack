//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const ISBN_KEY = Object.keys(data)[0]
        console.log(data['ISBN:9780980200447'].title)
        
       
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

