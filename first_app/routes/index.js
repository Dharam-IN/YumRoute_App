var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get("/", function(req,res){
  res.cookie("age", 25)
  res.render('index')
});

router.get("/check", function(req, res){
  console.log(req.cookies)
  res.send("check")
})

router.get("/delete", function(req, res){
  res.clearCookie("age")
  res.send("Clear ho gyi")
})


// Session Read Create Delete
// router.get("/", function(req,res){
//   req.session.ban = true
//   res.render('index')
// });
// router.get("/checkban", function(req,res){
//   console.log(req.session);
//   if(req.session.ban === true){
//     res.send("Check kiya hai console dekho")
//   }
//   else{
//     res.send("Remove Ban")
//   }
// })

// router.get("/removeban", function(req,res){
//   req.session.destroy(function(err){
//     if(err) throw err;
//     res.send("Remove Banned")
//   })
// })
 
// USERCREATE IN DATABASE 👇
// router.get("/create", async function(req, res){
//   const usercreated = await userModel.create({
//     username: "dharam1",
//     name: "dharamraj1",
//     age: 19
//   })
//   res.send(usercreated)
// })

// SEE ALL USERS 👇
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
