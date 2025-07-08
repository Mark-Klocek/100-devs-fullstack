const express = require('express')
const app = express()

const PORT = 8000

const rappers = {
  '21 Savage': {
    'age': 31,
    'birth name': 'Shéyaa Bin Abraham-Joseph',
    'birth location': 'London, England'
  },
  'Drake': {
    'age': 37,
    'birth name': 'Aubrey Drake Graham',
    'birth location': 'Toronto, Canada'
  },
  'Kendrick Lamar': {
    'age': 37,
    'birth name': 'Kendrick Lamar Duckworth',
    'birth location': 'Compton, California'
  },
  'J. Cole': {
    'age': 39,
    'birth name': 'Jermaine Lamarr Cole',
    'birth location': 'Frankfurt, Germany'
  },
  'Eminem': {
    'age': 51,
    'birth name': 'Marshall Bruce Mathers III',
    'birth location': 'St. Joseph, Missouri'
  },
  'Jay-Z': {
    'age': 54,
    'birth name': 'Shawn Corey Carter',
    'birth location': 'Brooklyn, New York'
  },
  'Kanye West': {
    'age': 47,
    'birth name': 'Ye (formerly Kanye Omari West)',
    'birth location': 'Atlanta, Georgia'
  },
  'Lil Wayne': {
    'age': 41,
    'birth name': 'Dwayne Michael Carter Jr.',
    'birth location': 'New Orleans, Louisiana'
  },
  'Nicki Minaj': {
    'age': 41,
    'birth name': 'Onika Tanya Maraj-Petty',
    'birth location': 'Saint James, Trinidad and Tobago'
  },
  'Travis Scott': {
    'age': 33,
    'birth name': 'Jacques Bermon Webster II',
    'birth location': 'Houston, Texas'
  },
  'Post Malone': {
    'age': 29,
    'birth name': 'Austin Richard Post',
    'birth location': 'Syracuse, New York'
  },
  'Megan Thee Stallion': {
    'age': 29,
    'birth name': 'Megan Jovon Ruth Pete',
    'birth location': 'San Antonio, Texas'
  },
  'Tyler, The Creator': {
    'age': 33,
    'birth name': 'Tyler Gregory Okonma',
    'birth location': 'Ladera Heights, California'
  },
  'Ice Spice': {
    'age': 24,
    'birth name': 'Isis Naija Gaston',
    'birth location': 'The Bronx, New York'
  },
  'Doja Cat': {
    'age': 28,
    'birth name': 'Amala Ratna Zandile Dlamin',
    'birth location': 'Los Angeles, California'
  },
  'oops':{
    'response':'this rapper isnt in our database!'
  }
};


app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/',(request,response)=>{
    response.json(rappers)
})

app.get('/api/:rapper',(request,response)=>{
    const rapperName = request.params.rapper
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }
    else{
        response.json(rappers['oops'])
    }
})


app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})