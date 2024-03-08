const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
    try {
        // console.log(global.fooddata)
        res.send([global.fooddata, global.foodCategory])
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;
