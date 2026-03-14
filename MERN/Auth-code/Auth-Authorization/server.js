import express from "express";

const app = express()

app.use(express.json())

const USER = {
    username: "Pramod",
    password: "1234"
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(username === USER.username && password === USER.password) {
        return res.json({ message: "Login Successful"})
    }

    res.status(401).json({ message: "Invalid Credientials" })
})

app.get('/dashboard', (req, res) => {
    return res.send("Welcome to Dashboard")
})

app.listen(3000, () => {
    console.log("server is Running");
})