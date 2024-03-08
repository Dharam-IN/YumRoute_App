const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');
const router = require("./routes/CreateUser")
const cors = require('cors')

mongoDB()


// Cors Without using package
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });
    
app.use(cors())
app.use(express.json())
app.use("/api", router)

app.get("/", function(req,res){
    res.send("Hello World")
})


app.listen(port, ()=>{
    console.log(`server is Running on ${port} Port`)
})
