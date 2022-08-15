const http = require('http');

const server = http.createServer((req, res)=> {
    if (req.url === '/'){
        res.write('Welcome from home page')
        res.end()
    }
    if (req.url === '/about'){
        res.write('Welcome from ABOUT page')
        res.end()
    } 
    res.end(`
    <h1> Oops...! you are looking for something we don't have it....! <\h1>
    <a href="/">Back To Home Page<\a>
    `)

    
})

server.listen(5000)