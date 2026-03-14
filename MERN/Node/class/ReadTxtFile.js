const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    fs.readFile("new.txt", "utf-8",(err, data) => {
        if(err) res.end("File Not Found");
        else res.end(data);
    })
});

server.listen(3000, () => {
    console.log("Server is Running");
});