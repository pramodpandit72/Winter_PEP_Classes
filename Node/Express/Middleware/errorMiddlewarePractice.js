import express from "express";
const app = express();

app.get('/',(req, res, next) => {
    const err = new Error("Error on Home Page");
    res.status(400);
    next(err);
})

app.get('/admin', (req, res, next) => {
    const err = new Error("Error on Admin Page");
    res.status(401);
    next(err);
})

app.get('/contact', (req, res, next) => {
    const err = new Error("Error on Contact Page");
    res.status(404);
    next(err);
})

app.get('/about', (req, res, next) => {
    const err = new Error("Error on About Page");
    res.status(500);
    next(err);
})


// app.get('/crash', (req,res) => {
//     throw new Error("Code crashed");
// })

app.use((err, req, res, next) => {
    console.log('Error caught');
    console.log(err.message);
    
    res.status(err.status || 500).send(err.message);
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})