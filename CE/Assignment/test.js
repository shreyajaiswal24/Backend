const http = require("http")
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    if(req.url == "/"){
        res.writeHead (200,{'Content-type': 'application/json'});
        const filedata = await fs.readFile("./blank.json", 'utf-8');
        res.end(filedata);
    }
    else if(req.url == "/index"){
        res.writeHead (200,{'Content-type': 'text/html'});
        const indexdata = await fs.readFile("./index.html", 'utf-8');
        res.end(indexdata);
    }
    else{
        res.writeHead (200,{'Content-type': 'text/html'});
        const errordata = await fs.readFile("./error.html", 'utf-8');
        res.end(errordata);
    }
})

const port = 3000;
server.listen (port, ()=> {
    console.log(`server is running on ${port}`);
});