import express from 'express'
import mongoose from 'mongoose'
import User from './models/User.js'

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test")
.then(()=> console.log("MongoDB connected (with schema)"))
.catch(err => console.log(err));

app.post('/users', async (req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user)
    } catch (err){
        res.status(400).json({error : err.message});
    }
});

app.get('/users', async (req, res) => {
    const user = await User.find();
    res.json(user);
})

app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
})

app.put('/users/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
    );
    res.json(updatedUser);
})

app.delete('/users/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
})

app.listen(3000, () => console.log("Server is running"))