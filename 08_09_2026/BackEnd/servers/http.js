import http from 'http'

const log = console.log;
const port = 3000

const server = http.createServer((req, res) =>{
        res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'})
    res.end("Server rodando com sucesso!")
})

server.listen(port, () =>{
    log(`Server rodando na http://localhost:${port}`)
})