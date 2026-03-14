import express from "express";

const app = express();

app.get('/',(req, res) => {
    res.send("Home Page");
})

app.get('/crash', (req,res) => {
    throw new Error("Code crashed");
})

app.use((err, req, res, next) => {
    console.log('Error caught');
    console.log(err.message);
    
    res.status(500).send("Something went wrong");
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})