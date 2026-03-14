import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

app.use(express.json());

const client = new MongoClient("mongodb://localhost:27017/")

let db;

async function connectDB() {
    await client.connect();
    db = client.db("schoolDB");
    console.log("MongoDB connected (NO schema)")
}

connectDB();


app.post('/student', async (req,res) => {
    const result = await db.collection("students").insertOne(req.body);
    res.send(result)
})

app.get('/increase-age', async (req,res)=> {
    const students = await db.collection("students").find().toArray();

    students.forEach(s => {
        s.age = s.age + 1;
    })
    res.send(students);
})

app.listen(3000, ()=>{
    console.log("server is running")
})