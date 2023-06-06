const express = require('express')
const mongoose = require('mongoose')
const { db } = require('./models/productModel')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())

//routes

app.get('/page-books', (req, res)=>{
    const page = req.query.p || 0
    const perPage = 50

    let books = []

    db.collection('products')
    .find()
    .skip(page*perPage)
    .limit(perPage)
    .forEach(book => books.push(book))
    .then(()=>{
        res.status(200).json(books)
    }).catch(()=>{
        res.status(500).json({error: 'Tidak dapat mengambil buku'})
    })
})


mongoose.connect('')
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000, ()=>{
        console.log('Node API app is running on port 3000')
    });
}).catch((error)=>{
    console.log(error)
})
