// const http = require('http');

// const server = http.createServer((req, res) => {

//     if(req.url === '/') {
//         res.end("Home Page");
//     }else if(req.url === '/about'){
//         res.end("About Page");
//     }else{
//         res.end("Server not found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server is Running");
// })



// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.method == 'GET') {
//         res.end('GET Request')
//     }
//     if(req.method == 'POST') {
//         res.end('POST Request')
//     }
// });
// server.listen(3000, () => {
//     console.log("Server is Running");
// })


// const http = require('http');
// const url = require('url');
// const server = http.createServer((req, res) => {
//     const parsedURL = url.parse(req.url, true);
//     res.end(JSON.stringify(parsedURL.query));
// });
// server.listen(3000, () => {
//     console.log("Server is Running");
// })
