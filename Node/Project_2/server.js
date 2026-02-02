import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

let students = JSON.parse(fs.readFileSync("./students.json", "utf-8"));

app.post("/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
    res.send("Student Added");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    res.json(student);
});

app.put("/students/:id", (req, res) => {
    const id = req.params.id;

    students = students.map(s =>
        s.id == id
            ? { id: s.id, ...req.body }
            : s
    );

    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
    res.send("Student Updated");
});

app.delete("/students/:id", (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2));
    res.send("Student Deleted");
});

app.listen(3000, () => {
    console.log("Server is running");
});
