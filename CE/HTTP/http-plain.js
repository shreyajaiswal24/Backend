const http = require("http");
const fs = require("fs/promises");
const server =  http.createServer (async(req,res) => {
    console.log(req.url);
    try{
        res.statusCode=  200;
        res.setHeader('Content-Type', 'text/html');
        // res.write("<H1>Hello, worldddd</H1>");
        const data= await fs.readFile("./home.html", "utf8");
        res.end(data);
            
        }
        catch (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Error loading home.html");
        }
    });


PORT = 3000;
server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})

