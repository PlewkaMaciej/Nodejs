const http = require9('http')
const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('Home Page')
}
if(req.url==='/about'){
    res.end('About Page')
}
})
server.listen(5000,()=>{
    console.log('Server Listening on port 5000....')
})