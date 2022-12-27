const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const AuthenticateUserMW=require("../middlewares/authenticationMW")



router.post("/createUser", UserController.createUser)

router.post("/login", UserController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", UserController.getUserDetails)
router.put("/users/:userId", UserController.updateUser)
router.delete("/users/:userId",AuthenticateUserMW.authenticateUser,UserController.deleteUser)

// router.put("/users/:userId", UserController.updateUser)

module.exports = router;


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })