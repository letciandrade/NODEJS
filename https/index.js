const http = require('http')
const port = 3333

const server = http.createServer((req, res)=>{

if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Oi</h1>')
    res.end()
}

else if(req.url === '/sobre'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Oi</h1>')
    res.end();
}
else if(req.url === '/contato'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Oi</h1>')
    res.end()
}
else{
    res.writeHead(404)
    res.write('<h1>NOT FOUND</h1>')
    res.end()
}

})


server.listen(port,()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${port} 😜✌️`)
})

