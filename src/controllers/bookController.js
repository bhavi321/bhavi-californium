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
let getBooksInYear= async function(req,res){
    let yr=req.params.input
    let getBooksOfYear= await BookModel.find({year:{$eq:yr}})
    res.send({msg:getBooksOfYear})
}
let getParticularBooks=async function(req,res){
let getData = req.body
let showParticularBooks=await BookModel.find(getData)
res.send({msg:showParticularBooks})
}
let getXINRBooks=async function(req,res){
    let bookData=await BookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg:bookData})
}

let getRandomBooks= async function(req,res){
    let bookData1=await BookModel.find({$or:[{stockAvailable:{$eq:true}},{totalPages:{$gt:500}}]})
    res.send({msg:bookData1})
}
module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
// let bookData1=await BookModel.find({$or:[{prices:{indianPrice:{$eq:"100INR"}}},{prices:{indianPrice:{$eq:"200INR"}}},{prices:{indianPrice:{$eq:"500INR"}}}]})
// let bookData1=await BookModel.find({$or:[{stockAvailable:{$eq:true}},{totalPages:{$gt:500}}]})
// let bookData1=await BookModel.find({$or:[{prices:{indianPrice:"100INR"},prices:{indianPrice:"200INR"},prices:{indianPrice:"500INR"}}]})

