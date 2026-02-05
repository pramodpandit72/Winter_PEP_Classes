import express from "express";
const app = express();

const asyncWork = () => {
    Promise.reject(new Error("Async Error"));
}

app.get('/test',async(req, res) => {
    asyncWork().catch(next);
    res.send("Success");
})

app.use((err, req, res, next) => {
    res.send("Error Cought");
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})