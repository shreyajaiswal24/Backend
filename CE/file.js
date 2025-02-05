const fs= require('fs')
// const data = fs.readFileSync("./data.txt","utf-8");
// console.log(data);
fs.appendFileSync("data1.txt","AKTU");
fs.renameSync("./data1.txt", "./data2.txt")
