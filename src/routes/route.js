const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const MyController= require("../controllers/myController")


router.post("/createBook", MyController.createBook)
router.post("/createAuthor", MyController.createAuthor)
router.get("/listBooks",MyController.listBooks)
router.get("/updated",MyController.updated)
router.get("/booksCost",MyController.booksCost)






//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;