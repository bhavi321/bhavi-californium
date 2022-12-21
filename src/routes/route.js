const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const PublisherController=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBook", BookController.createBook)
router.post("/createBook1", BookController.createBook1)
router.post("/createAuthor", AuthorController.createAuthor)
router.post("/createPublisher", PublisherController.createPublisher)
router.get("/getBooksWithAuthorDetails", BookController.getBooksWithAuthorDetails)
router.put("/updateKey", BookController.updateKey)

// router.get("/getAuthorsData", authorController.getAuthorsData)



// 

module.exports = router;