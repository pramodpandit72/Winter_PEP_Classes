// import express from "express";

// const app = express();

// app.get("/user/:id", (req, res) => {
//     const userID = req.params.id;
//     // console.log(req.params);
//     res.send(`User ID is ${userID}`);
// });

// app.listen(3000, () => {
//     console.log("http://localhost:3000");
// })


// import express from "express";

// const app = express();

// // app.get("/students/:class/:roll", (req, res) => {
// //     res.json(req.params);
// // });
// app.get("/students/:class/:roll/:age", (req, res) => { // "/students/:class/:roll/:age/:..../n"
//     res.json(req.params);
// });

// app.listen(3000, () => {
//     console.log("http://localhost:3000");
// })


import express from "express";

const app = express();

const students = [
    { id : 1, name : "Pramod" },
    { id : 2, name : "Kundan" },
    { id : 3, name : "Akash" }
]

app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    
    const student = students.find(s => s.id == id);

    if(!student) {
        return res.status(404).send(`Student not found`);
    }

    res.json(student);
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
})