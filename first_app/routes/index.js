var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get("/", function(req,res){
  res.render('index')
});

// USERCREATE IN DATABASE 👇
// router.get("/create", async function(req, res){
//   const usercreated = await userModel.create({
//     username: "dharam1",
//     name: "dharamraj1",
//     age: 19
//   })
//   res.send(usercreated)
// })

// READING ALL USERS 👇
router.get("/allusers", async function(req,res){
  const allUsers = await userModel.find(); // IF YOU SEE ALL USERS USE find() function
  // const allUsers = await userModel.findOne({username: "dharam1"}); // IF YOU SEE ONLY ONE USER USE findOne() function
  res.send(allUsers)
})

// DELETE USERS 👇
// router.get("/delete", async function(req,res){
//   const deleteduser = await userModel.findOneAndDelete({
//     username: "dharam1"
//   })
//   res.send(deleteduser)
// })


module.exports = router;
