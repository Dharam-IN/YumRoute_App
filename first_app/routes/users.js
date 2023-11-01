const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/practice_db') // database creation - create a database automatic

const userschema = mongoose.Schema({ // hmare database me kya kya hoga
  username: String,
  name: String,
  age: Number
})

mongoose.model("user", userschema); // document create krega 
