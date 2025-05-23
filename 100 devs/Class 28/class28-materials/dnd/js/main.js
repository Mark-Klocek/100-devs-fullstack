//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value.replaceAll(' ', '-').toLowerCase()
    const url = `https://www.dnd5eapi.co/api/2014/spells/${choice}`
    document.querySelector('ul').innerHTML = ''
  fetch(url)
    
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        data.subclasses.forEach(element => document.querySelector('ul').innerHTML += `<li>${element.name}</li>`)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

