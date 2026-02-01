import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

const FILE_PATH = "./students.json";

// helper function to read file
const readStudents = () => {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data);
};

// helper function to write file
const writeStudents = (data) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

/* ======================
   POST /Student
   ====================== */
app.post("/Student", (req, res) => {
    const { id, name, email, course } = req.body;

    if (!id || !name || !email || !course) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const students = readStudents();

    const exists = students.find(s => s.id === id);
    if (exists) {
        return res.status(409).json({ message: "Student already exists" });
    }

    students.push({ id, name, email, course });
    writeStudents(students);

    res.status(201).json({ message: "Student added successfully" });
});

/* ======================
   GET /Student
   ====================== */
app.get("/Student", (req, res) => {
    const students = readStudents();
    res.json(students);
});

/* ======================
   GET /Student/:id
   ====================== */
app.get("/Student/:id", (req, res) => {
    const students = readStudents();
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

/* ======================
   PUT /Student/:id
   ====================== */
app.put("/Student/:id", (req, res) => {
    const { name, email, course } = req.body;
    const students = readStudents();

    let found = false;

    const updatedStudents = students.map(s => {
        if (s.id == req.params.id) {
            found = true;
            return { id: s.id, name, email, course };
        }
        return s;
    });

    if (!found) {
        return res.status(404).json({ message: "Student not found" });
    }

    writeStudents(updatedStudents);
    res.json({ message: "Student updated successfully" });
});

/* ======================
   DELETE /Student/:id
   ====================== */
app.delete("/Student/:id", (req, res) => {
    const students = readStudents();
    const filteredStudents = students.filter(s => s.id != req.params.id);

    if (students.length === filteredStudents.length) {
        return res.status(404).json({ message: "Student not found" });
    }

    writeStudents(filteredStudents);
    res.json({ message: "Student deleted successfully" });
});

/* ====================== */

app.listen(3000, () => {
    console.log("Server running on port 3000");
});