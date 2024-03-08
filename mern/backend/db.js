const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// const url = process.env.URL;
const url = "mongodb://localhost:27017/foodapp"

const mongoDB = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("Database Connected");

        const fetchData = mongoose.connection.db.collection('fooddata');
        const data = await fetchData.find({}).toArray();
        // console.log(data);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
};

module.exports = mongoDB;
