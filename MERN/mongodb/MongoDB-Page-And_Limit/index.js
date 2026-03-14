import express from "express"
import mongoose from "mongoose"

const app = express();

mongoose.connect('mongodb://localhost:27017/shopDB')
    .then(() => {console.log("MongoDB Connected")});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

const Product = mongoose.model("Product", productSchema)

app.get("/products", async (req, res) => {
    const page = parseInt(req.query.page) || 1;

    const limit = 2;

    const skip = limit * (page - 1);

    const products = await
    Product.find({}, {name: 1, _id: 0})
        .sort( {price: -1})
        .skip(skip)
        .limit(limit);
    res.json({
        page,
        data: products
    })
})

app.listen(3000, () =>{
    console.log("Server is running");
})
// http://localhost:3000/products
// http://localhost:3000/products?page=2
// http://localhost:3000/products?page=3




// // To show all data in ascending order
// import express from "express"
// import mongoose from "mongoose"

// const app = express();

// mongoose.connect('mongodb://localhost:27017/shopDB')
//     .then(() => {console.log("MongoDB Connected")});

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// })

// const Product = mongoose.model("Product", productSchema)

// app.get("/products", async (req, res) => {

//     const products = await
//     Product.find({}, {name: 1, _id: 0})
//         .sort( {price: -1})
//     res.json({
//         data: products
//     })
// })

// app.listen(3000, () =>{
//     console.log("Server is running");
// })