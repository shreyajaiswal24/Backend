const fs= require('fs')
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);
// fs.appendFileSync("data1.txt","AKTU");
// // fs.renameSync("./data1.txt", "./data2.txt")
// fs.unlinkSync("./data2.txt");

if(data.match("h")){
    console.log("h is present");
   const changedata= data.replace("h", "ABES");
   fs.writeFileSync("./data.txt",changedata);
}