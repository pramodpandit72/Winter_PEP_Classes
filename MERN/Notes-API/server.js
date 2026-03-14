import express from "express"
import mongoose from "mongoose"
import Notes from "./Models/Notes.js"

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Notes")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post('/notes', async (req, res) => {
    try {
        const note = await Notes.create(req.body);
        res.status(201).json(note)
    } catch (err) {
        res.status(400).json({error : err.message});
    }
});

app.get('/notes', async (req, res) => {
    const note = await Notes.find();
    res.json(note);
})

app.get('/notes/:id', async (req, res) => {
    const note = await Notes.findById(req.params.id);
    res.json(note);
})

app.put('/notes/:id', async (req, res) => {
    const updatedNotes = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
         { new : true }
    );
    res.json(updatedNotes)
})

app.delete('/notes/:id', async (req, res) => {
    const note = await Notes.findByIdAndDelete(req.params.id);
    res.json(note);
})

app.listen(3000, () => {
    console.log("Server is Running");  
})