const http=require('http');

const server=http.createServer((req,res)=>{
    res.write('hello welcome the first page');
    res.end();
})

server.listen(5000);