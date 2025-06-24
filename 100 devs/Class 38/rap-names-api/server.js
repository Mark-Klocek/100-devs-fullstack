const express = require('express')
const app = express()
const PORT = 12000

const rappers = {
    '21 savage':{
        'age': 29, 
        'birthName':'Sheyaa Bin Abraham-Joseph',
        'birthLocation':'London, England',
    },
    'chance the rapper':{
        'age': 28, 
        'birthName':'Chancelor Bennett',
        'birthLocation':'Chicago, Illinois',
    },
    'dylan':{
        'age': 28, 
        'birthName':'Dylan',
        'birthLocation':'Dylan',
    }
}
    



app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName',(request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    console.log(rappers[rappersName])
    if (rappers[rappersName]){
        response.json(rappers[rappersName])
    }
    else{
        response.json(rappers['dylan'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server is running on port ${PORT}.`)
})