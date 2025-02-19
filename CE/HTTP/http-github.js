const http = require("http");
const port = 3000;
const axios = require('axios');
const server = http.createServer(async(req, res) => {
    console.log("New request received");
    res.writeHead(200, { "Content-Type": "application/json" });
})

const response = await axios.get("https://api.github.com/search/users)
    
    params: {
        q: "location.ghazaibad"
    }
);
const ghaziabad = response.data.ghaziabad;
let frontData = ``
