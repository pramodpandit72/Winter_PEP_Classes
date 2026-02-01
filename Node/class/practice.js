// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello");
// });

// server.listen(3000, () => {
//     console.log("server is running");
// })

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// function serverHTML(res, fileName) {
//     const filePath = path.join(__dirname, fileName);

//     fs.readFile(filePath, (err, data) => {
//         if(err) {
//             res.writeHead(500, {"Content-Type" : "text/html"});
//             res.end("<h1>500 server Error</h1>")
//             return;
//         }

//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.end(data);
//     })
// }

// const server = http.createServer((req, res) => {
//     if(req.url === "/index"){
//         serverHTML(res, "index.html");
//     }else{
//         res.end("Server not found");
//     }
// });

// server.listen(3000, () => {
//     console.log("server is running");
// })



const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream("500mb.txt", "utf-8");

    stream.on("data", (chunk) => {
       res.write(chunk);
    });

});

server.listen(3000, () => {
    console.log("Server is Running on port 3000");
});
