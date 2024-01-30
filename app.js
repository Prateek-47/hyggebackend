const http =require('http');

const server=http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('welcome to first page');
    }
    else if (req.url==='/about'){
        res.end('this is the about page');
    }
    else{
        res.end(`
        <h1>oops!</h1>
        <a href="/">back home</a>
        `);
    }
})

server.listen(5000);