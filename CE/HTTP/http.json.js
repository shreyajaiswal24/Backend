// const http = require("http");
// const fs = require("fs/promises");
// const server =  http.createServer (async(req,res) => {
//     console.log(req.url);
//     try{
//         res.statusCode=  200;
//         res.writeHead('Content-Type', 'text/html');
//         res.end("<H1>Hello, worldddd</H1>");
//         const data= await fs.readFile("./home.html", "utf8");
//         res.end(data);
            
//         }
//         catch (err) {
//             res.statusCode = 500;
//             res.setHeader("Content-Type", "text/plain");
//             res.end("Error loading home.html");
//         }
//     });


// PORT = 3000;
// server.listen(PORT, ()=> {
//     console.log(`Server is running on port ${PORT}`);
// })


const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req,res)=>{

    res.writeHead(200,{'contact-type': 'application/json'});
    const filedata = await fs.readFile("./users.json", 'utf8');
    const parsedata = JSON.parse(filedata);
    res.end(JSON.stringify(parsedata));

    
    // const newdata = users.map((user) => {
    //     return user.name
    // });
    // let newdata = " ";
    // users.forEach((user) => {
    //     newdata += `${user.name}`;
    // });

    // res.end(JSON.stringify(newdata));
    res.end(filedata)
});
const port = 3000;
server.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});