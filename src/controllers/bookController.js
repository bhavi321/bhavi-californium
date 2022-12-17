const BookModel = require("../models/bookModel")
let createBook= async function(req,res){
    let data = req.body
  let allBooksData =  await BookModel.create(data)
  res.send({msg:allBooksData})
}
let bookList = async function(req,res){
    let booksList= await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg:booksList})
}
let getBooksInYear=function(req,res){
    let data=req.params.
    let getBooksOfYear= await BookModel.find().
    res.send({msg:getBooksOfYear})
}

module.exports.createBook=createBook
module.exports.bookList=bookList