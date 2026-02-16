import exprss from "express"
import session from "express-session"

const app = exprss()

app.use(exprss.json())

app.use(
    session({
        secret: "hello123",
        resave: false,
        saveUninitialized: false
    })
)

const USER = {
    username: "Pramod",
    password: "1234"
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(username === USER.username && password == USER.password) {
        // req.session.auth = true;
        // req.session.username = username;
        req.session.user = username;
        return res.json("Login Successful")
    }

    res.status(401).json({ message: "Invalid Credientials"})
})

app.get('/dashboard', (req, res) => {
    // if(req.session.auth) {
    //     return res.send("Welcome to Dashboard")
    // }

    // res.status(401).send("Unauthorized")

    if(!req.session.user) {
        return res.status(401).json({message: "Unauthorized"}) 
    }

    res.send(`Welcome to Dashboard ${req.session.user}`)
})

// app.post('/logout', (req, res) => {
//     req.session.destroy(() => {
//         res.send("Logout Succesfully")
//     })
// })

app.listen(3000, () => {
    console.log("Server is Running")
})