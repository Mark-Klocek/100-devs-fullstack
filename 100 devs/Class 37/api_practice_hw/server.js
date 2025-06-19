const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((request,response)=>{
    const page = url.parse(request.url).pathname;
    const params = querystring.parse(url.parse(request.url).query)

    switch (page){
        case '/':
            fs.readFile('index.html', function(error,data){
                response.writeHead(200, {'Content-type':'text/html'});
                response.write(data);
                response.end()

            })
        case '/otherpage':
            fs.readFile('index.html', function(error,data){
                response.writeHead(200, {'Content-type':'text/html'});
                response.write(data);
                response.end()

            })
    }

})

server.listen(8000)