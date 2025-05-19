import { API_KEY } from "./config.js";

fetch(`https://api.nasa.gov/planetary/apod?date=2024-12-14&api_key=${API_KEY}`)

  .then(res => res.json())
  .then(data => {
    document.querySelector('img').src=data.url
    document.querySelector('h2').innerText = data.explanation
    console.log(data)    
})
  .catch(err => console.error('Error:', err));

