import express from "express";
import fs from "fs";
import path from "path";

const app = express();

const __dirname = path.resolve();
const dataFile = "./complaints.json";

app.use(express.json());
app.use(express.static("public"));

const readData = () => JSON.parse(fs.readFileSync(dataFile));
const writeData = (data) =>
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

app.get("/complaints", (req, res) => {
  res.json(readData());
});

app.get("/complaints/:id", (req, res) => {
  const complaints = readData();
  const complaint = complaints.find(c => c.id == req.params.id);
  res.json(complaint || {});
});

app.post("/complaints", (req, res) => {
  const complaints = readData();

  const newComplaint = {
    id: Date.now(),
    ...req.body,
    status: "pending"
  };

  complaints.push(newComplaint);
  writeData(complaints);

  res.json(newComplaint);
});

app.put("/complaints/:id", (req, res) => {
  const complaints = readData();
  const index = complaints.findIndex(c => c.id == req.params.id);

  if (index !== -1) {
    complaints[index].status = req.body.status;
    writeData(complaints);
  }

  res.json({ message: "Updated" });
});

app.delete("/complaints/:id", (req, res) => {
  const complaints = readData().filter(c => c.id != req.params.id);
  writeData(complaints);
  res.json({ message: "Deleted" });
});

app.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);