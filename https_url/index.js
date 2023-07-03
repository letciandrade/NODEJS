const http = require('http')
const port = 2000

const server = http.createServer((req, res)=>{
    const urlInfo = require('url').parse(req.url,true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-typre','text/html')

    if(!name){
     res.end(`<h1>preencha seu nome:</h1> <form method ="GET"> <input type="name" > <input type="submit" value="enviar"> </form> `)
    }else{
        res.write(`<h1>Bem vindo ${name}</h1>`)
    }
})

server.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})
