const express = require('express');
const router = express.Router();
const BookController=require("../controllers/bookController")
router.post("/createBook",BookController.createBook)
router.get("/bookList",BookController.bookList)
router.post("/getBooksInYear",BookController.getBooksInYear)

module.exports = router;