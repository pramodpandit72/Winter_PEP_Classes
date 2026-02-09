import express from "express";
import fs from "fs";
import path from "path";

const app = express();

const __dirname = path.resolve();
const dataFile = "./complaints.json";

app.use(express.json());
app.use(express.static("public"));

const readData = () =>
  fs.existsSync(dataFile)
    ? JSON.parse(fs.readFileSync(dataFile))
    : [];

const writeData = (data) =>
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

const getNextId = (complaints) => {
  if (complaints.length === 0) return 1;
  return Math.max(...complaints.map(c => c.id)) + 1;
};

app.get("/complaints", (req, res) => {
  res.json(readData());
});

app.get("/complaints/:id", (req, res) => {
  const complaints = readData();
  const id = Number(req.params.id);
  const complaint = complaints.find(c => c.id === id);

  res.json(complaint || {});
});

app.post("/complaints", (req, res) => {
  const complaints = readData();
  const { name, email, subject, description } = req.body;

  const newComplaint = {
    id: getNextId(complaints),
    name,
    email,
    subject,
    description,
    status: "pending"
  };

  complaints.push(newComplaint);
  writeData(complaints);

  res.status(201).json(newComplaint);
});

app.put("/complaints/:id", (req, res) => {
  const complaints = readData();
  const id = Number(req.params.id);
  const index = complaints.findIndex(c => c.id === id);

  if (index !== -1) {
    complaints[index].status = req.body.status;
    writeData(complaints);
    return res.json({ message: "Updated" });
  }

  res.status(404).json({ message: "Not found" });
});

app.delete("/complaints/:id", (req, res) => {
  const complaints = readData();
  const id = Number(req.params.id);
  const index = complaints.findIndex(c => c.id === id);

  if (index !== -1) {
    complaints.splice(index, 1);
    writeData(complaints);
    return res.json({ message: "Deleted" });
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);