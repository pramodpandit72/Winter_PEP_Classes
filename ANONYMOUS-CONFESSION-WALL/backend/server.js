import express from "express"
import mongoose from "mongoose"
import session from "express-session"
import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"));

app.listen(5000, () => console.log("Server running"));







// import express from "express"
// import session from "express-session"
// import passport from "passport"
// import { Strategy as GoogleStrategy } from "passport-google-oauth20"
// import dotenv from "dotenv"

// dotenv.config();
// const app = express();

// // Session
// app.use(
//     session({
//         secret: "hello123",
//         resave: false,
//         saveUninitialized: false
//     })
// )

// // Initailize passport
// app.use(passport.initialize());
// app.use(passport.session());

// // serialize user
// passport.serializeUser((user, done) => {
//     done(null, user);
// })

// // Descerialize user
// passport.deserializeUser((user, done) => {
//     done(null, user);
// })

// // Google Strategy
// passport.use(
//     new GoogleStrategy({
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: "/auth/google/callback"
//     }, (accesstoken, refreshtoken, profile, done) => {
//         return done(null, profile);
//     })
// )

// // Home Route
// app.get('/', (req, res) => {
//     res.send(`<a href="/auth/google/"> Login with google </a>`)
// })

// // Start google Login
// app.get('/auth/google', passport.authenticate("google", {scope: ["profile", "email"]}))

// // Callback Route

// app.get('/auth/google/callback', passport.authenticate("google", {failureRedirect: '/'}), (req, res) => {
//     res.send(`Welcome ${req.user.displayName}`)
// })

// app.get('/logout', (req, res) => {
//     req.logOut(() => {
//         res.redirect('/');
//     })
// })

// app.listen(3000, () => {
//     console.log("Server is running");
// })