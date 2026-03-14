// const fs = require("fs");

// console.log("Before Read");
// const data = fs.readFileSync("notes.txt", "utf-8");
// console.log(data);
// console.log("After Read");


// const fs = require("fs");
// console.log("Before Read");
// fs.readFile("notes.txt", "utf-8", (err, data) =>{
//     if(err) {
//         console.log(Error);
//         return;
//     }
//     console.log(data);
// });
// console.log("After Read");


// const fs = require("fs");
// fs.writeFile("notes.txt", "\n This is a new line", (err) =>{
//     if(err) {
//         console.log(Error);
//     }
//     console.log("File Created");
// });


// const fs = require("fs");
// fs.appendFile("notes.txt", "\n This is a new line", (err) =>{
//     if(err) {
//         console.log(Error);
//     }
//     console.log("File Added");
// });


// const fs = require("fs");
// fs.unlink("output.txt", () => {
//     console.log("File Deleted");
// });


// const fs = require("fs");
// fs.mkdir("file", () =>{
//     console.log("Folder created");
// });


// const fs = require("fs");
// fs.rmdir("file", () =>{
//     console.log("Folder Removed");
// });


// const fs = require("fs");
// fs.rename("notes.txt","new.txt", () =>{
//     console.log("File Renamed");
// });


// const fs = require("fs");
// if(fs.existsSync('new.txt')) {
//     console.log("File exist");
// }


// const fs = require("fs");
// fs.readFile('image.jpg', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })


// const fs = require("fs");
// fs.readFile('image.jpg', (err, data) => {
//     if(err) throw err;
//     fs.writeFile('copy.jpg', data, () => {
//         console.log("Image copied");
//     });
// });


// const fs = require("fs");
// fs.stat("500mb.txt", (err, stats) => {
//   if (err) throw err;
//   console.log(stats.size); // size in bytes
// });


// const fs = require("fs");
// // import express-status-monitor from "express-status-monitor";

// fs.readFile("500mb.txt", "utf-8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });


const fs = require("fs");
const stream = fs.createReadStream("500mb.txt",{
    encoding: "utf-8",
    highWaterMark: 64 * 1024
});

let i = 0;
stream.on("data", (chunk) => {
   i++;
   console.log(`chunk ${i} -`, chunk.slice(0, 50));
   
});

stream.on("end", () => {
    console.log("Done Reading File");
});

stream.on("error", (err) => {
    console.err("Error", err);
    
})