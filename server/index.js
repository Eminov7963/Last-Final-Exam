const mongoose = require('mongoose');
const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json())
const ProductRouter = require("./routers/productRouters")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/products",ProductRouter)

const DB_URL = "mongodb+srv://eminovemin199:eminovemin199@eminfullstack-project.mbhs8.mongodb.net/fullStack-practica?retryWrites=true&w=majority&appName=EminFullStack-Project"
const port = 8080


mongoose.connect(DB_URL)
  .then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
      })
    console.log('Connected!')});