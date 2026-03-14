// import express from 'express';
// const app = express(); //instance of creating server
// app.get("/", (req, res) => {
//     res.send("Hello World")
// })
// app.listen(3000, () =>{
//     console.log("Server is running");  
// });


// import express from 'express';

// const app = express();
// app.use(express.json());

// let users = [
//     { id:1, name: "Pramod", "age": 22 },
//     { id:2, name: "Akash", "age": 24 }
// ]

// app.post("/users", (req, res) => {
//     const newUser = req.body;
//     users.push(newUser);
//     res.send("User Added");
// })

// app.get("/users", (req, res) => {
//     res.json(users);
// })

// app.get("/users/:id", (req, res) => {
//     const user = users.find(i => i.id == req.params.id)
//     res.json(user);
// })

// app.put("/users/:id", (req, res) => {
//     const id = req.params.id;

//     users = users.map(u => u.id == id ? {
//         // ...u,
//         id: u.id,
//         ...req.body
//         // name: req.body.name
//     } : u);
//     res.send("User updated");
// })

// app.delete("/users/:id", (req, res) => {
//     users = users.filter(u => u.id != req.params.id);
//     res.send("User Deleted")
// })

// app.patch("/users/:id", (req, res) =>{
//     const id = req.params.id;

//     users = users.map(u => u.id == id ? {
//         ...u,
//         ...req.body
//     } : u);
//     res.send("User updated");
// })

// app.listen(3000, () =>{
//     console.log("Server is running");  
// });


import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
// app.use(morgan("combined"));


let user = {
    id: 1,
    age: 20,
    name: "Pramod",
    isActive: true
};

app.get("/user", (req, res) => {
    res.json(user);
})

app.post("/user", (req, res) => {
    user.id += 1;
    res.send(`new user created with ${user.id}`); 
})

app.put("/user", (req, res) => {
    user = {
        id: 1,
        name: req.body.name,
        age: req.body.age,
        isActive: req.body.isActive
    };
    res.send("user replaced completely");
})

app.patch("/user/age", (req, res) => {
    user.age += 1;
    res.send(`Age increased ${user.age}`);
})

app.patch('/user/toggle', (req,res)=>{
    user.isActive = !user.isActive;
    res.send(`isActive is now ${user.isActive}`);
});

app.patch("/user/name", (req, res) => {
    user.name = req.body.name;
    res.send(`Name Changed to ${user.name}`);
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})