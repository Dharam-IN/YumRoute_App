const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// const url = process.env.URL;
const url = "mongodb://localhost:27017/foodapp"

const mongoDB = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("Database Connected");

        const collection = mongoose.connection.db.collection('fooddata');
        const data = await collection.find({}).toArray()

        global.fooddata = data;

        const catCollection = mongoose.connection.db.collection("foodcategory");
        const catData = await catCollection.find({}).toArray();

        global.foodCategory = catData;

        // collection.find({}).toArray(function(err, data){
        //     console.log("datass")
        //     if(err){
        //         console.log(`Error in DB:- ${err}`);
        //     } else {
        //         if (data.length === 0) {
        //             console.log("No data found in the 'fooddata' collection.");
        //         } else {
        //             console.log("Data retrieved successfully:");
        //             console.log(data);
        //             global.foodItems = data;
        //         }
        //     }
        // });
    } catch (err) {
        console.error(`Error: ${err}`);
    }
};

module.exports = mongoDB;
