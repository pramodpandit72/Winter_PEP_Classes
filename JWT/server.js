import express from "express"
import jwt from "jsonwebtoken"

const app = express()
app.use(express.json())

const SECRET = "hello123";

const USER = {
    id: 1,
    username: "Pramod",
    password: "1234"
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(username === USER.username && password === USER.password) {
        const token = jwt.sign({
            id: USER.id, username: USER.username
        }, SECRET, { expiresIn: '1h'})
        return res.json({ token })
    }

    res.status(401).json({ message: "Invalid Credientials" })
})

// Middleware
function authenticateToken(req, res, next) {
    const autheader = req.headers["authorization"];

    const token = autheader && autheader.split(" ")[1];

    if(!token) return res.status(401).json({ message: "Token Required" });

    jwt.verify(token, SECRET, (err, user) => {
        if(err) return res.status(403).json({ message: "Invalid Token"});
        req.user = user;
        next();
    })
}

app.get('/dashboard', authenticateToken, (req, res) => {
    res.send(`Welcome ${req.user.username}`)
})

app.listen(3000, () => {
    console.log("server is Running");
})