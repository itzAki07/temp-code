const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('This is the home page')
    }

    if(req.url === '/about') {
        res.end('Here is the about page')
    }
    // res.write('Welcome to our home page')
    res.end(`
        <h1> Wrong URL </h1>
    `)
})

server.listen(5000)

