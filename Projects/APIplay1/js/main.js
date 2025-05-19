import { API_KEY } from "./config.js";
console.log('API_KEY:', API_KEY);

fetch(`https://api.nasa.gov/planetary/apod?date=2024-12-12&api_key=${API_KEY}`)

  .then(res => res.json())
  .then(data => document.querySelector('img').src=data.hdurl)
  .catch(err => console.error('Error:', err));

