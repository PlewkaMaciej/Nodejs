const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('Welcome to history')
    }
res.end(`
<h1>
OOOPS
</h1>
`)
})
server.listen(5000)