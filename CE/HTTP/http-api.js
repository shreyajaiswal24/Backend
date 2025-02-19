const http = require("http");
const port = 3000;
const axios = require('axios');
const server = http.createServer(async (req, res) => {
  console.log("New request received");
  res.writeHead(200, { "Content-Type": "application/json" });

  const response = await axios.get("https://dummyjson.com/products");
  // const data = await response.json();
  const productsdata = response.data.products;
  let frontData = `<html><head></head><body>`
  productsdata.forEach((products) => {
    frontData += `<div><img src=" ${products.thumbnail }" </div>`
  })
  
  frontData += `</body></html>`;
  res.end(frontData);
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
