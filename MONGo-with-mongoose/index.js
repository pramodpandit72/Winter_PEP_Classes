import express from "express"
import mongoose from "mongoose"
import Student from "./models/Student.js"

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/")
.then( () => console.log("MongoDB Connected"))


app.post('/student', async (req, res) => {
    res.send()
})

app.listen(4000, () => {
    console.log("server is running");
})