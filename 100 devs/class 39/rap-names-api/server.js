const express = require('express')
const app = express()

const PORT = 8000

const savage = {
    'birth name': 29,
    'birth location': 'sheya bin abraham',
    'age' : 'London, England'
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/',(request,response)=>{
    response.json(savage)
})



app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})