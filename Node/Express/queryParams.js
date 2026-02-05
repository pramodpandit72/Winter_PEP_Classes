import express from "express";

const app = express();

const students = [
    { id : 1, name : "Pramod" },
    { id : 2, name : "Kundan" },
    { id : 3, name : "Akash" }
]

app.get("/search", (req, res) => {
    // console.log(req.query);
    const name = req.query.name;

    res.send(`You searched for ${name}`);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
})