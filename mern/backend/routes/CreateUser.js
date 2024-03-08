const express = require('express');
const router = express.Router();
const user = require('../models/User')

router.post("/createuser",async function(req, res){
    
    try {
        await user.create({
            name: "Dharam",
            location: "Jaipur",
            email: "dharam@mail.com",
            password: "dharampassword"
        })

        res.json({success: true})

    } catch (error) {
        console.log(`Error In user Create:- ${error}`)
        res.json({success: false})
    }

})

module.exports = router;