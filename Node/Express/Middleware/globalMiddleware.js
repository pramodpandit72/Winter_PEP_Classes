import express from "express";

const app = express();

function globalMiddleware(req, res, next) {
    console.log("Middleware Started");
    console.log("URL: ",req.url);
    next();
}

app.use(globalMiddleware);

app.get('/',(req, res) => {
    res.send("Home Page");
})

app.get('/admin', (req, res) => {
    res.send("Admin page");
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})