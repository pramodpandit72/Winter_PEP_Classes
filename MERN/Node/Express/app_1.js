import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
// const __filename = fileURLToPath
// (import )

app.get("/send", (req, res) => {
    res.send("Hello from express");
})

app.get("/json", (req, res) => {
    res.json({
        name: "Pramod",
        role: "Student"
    });
})

app.get("/status", (req, res) => {
    res.status(404).send("Page not found");
})

app.get("/redirect", (req, res) => {
    res.redirect("/send");
})

// app.get("/file", (req, res) => {
//     res.sendFile(__dirname + "/index_1.html");
// })

app.get("/write", (req, res) => {
    res.write("Hello");
    res.write(" Pramod");
    res.end(" Bye");
})

app.get("/set")

app.listen(3000, () => {
    console.log("http://localhost:3000");
})