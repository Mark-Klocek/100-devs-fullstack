//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/2014/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        data.subclasses.forEach(element => document.querySelector('ul').innerText += element.name +'\n')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

