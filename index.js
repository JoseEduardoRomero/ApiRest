require('dotenv').config()
require('./lib/mongo')
const express = require('express')
const bodyParser = require('body-parser')

const productsApiRouter =require('./routes/api/products')
// const userApiRouter = require ('./routes/api/user')

//App
const app = express();

//Midleware
app.use(bodyParser.json())


//Rutas
app.use("/api/products",productsApiRouter)
// app.use("/api/user",userApiRouter)

//Server
const server = app.listen(8000, function(){
    console.log(`Listen http://localhost:${server.address().port}`)
})