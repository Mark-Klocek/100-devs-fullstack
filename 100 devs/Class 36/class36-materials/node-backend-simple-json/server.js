const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  
  const readWrite = (filePath,contentType)=>{
    fs.readFile(filePath, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }
  switch (page){
    case '/':
      readWrite('index.html','text/html')
      break; 

    case '/otherpage':
      readWrite('otherpage.html','text/html')
      break;

    case '/otherotherpage':
      readWrite('otherotherpage.html','text/html')
      break;

    case '/api':
      sName = ''
      sStatus = ''
      sCurrentOccupation = ''
      if(params['student']== 'flip'){
        sStatus = ''
        let flipResult = Math.random()
        flipResult < 0.50 ? sStatus = 'tails' : sStatus = 'heads'
        
        
        
      }
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: sName,
          status: sStatus,
          currentOccupation: sCurrentOccupation
        }
        res.end(JSON.stringify(objToJson));    
      break;

    case '/css/style.css':
      fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end() 
      });
      break;

    case '/js/main.js':
      readWrite('js/main.js','text/javascript')
      break;
    default:

      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
  }
  console.log(page);
  
});

server.listen(8000);
