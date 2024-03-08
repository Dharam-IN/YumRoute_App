const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');
const router = require("./routes/CreateUser")

mongoDB()

app.get("/", function(req,res){
    res.send("Hello World")
})

app.use(express.json())

app.use("/api", router)

app.listen(port, ()=>{
    console.log(`server is Running on ${port} Port`)
})
