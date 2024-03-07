const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const url = process.env.MONGOURL;

const mongoDB = () => {
    mongoose.connect(url)
    .then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log(`Error:- ${err}`)
    })
}

module.exports = mongoDB;