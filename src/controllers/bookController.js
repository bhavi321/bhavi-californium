const {isValidObjectId}=require("mongoose")
const BookModel= require("../models/bookModel")
const PublisherModel=require("../models/publisherModel")
const createBook= async function (req, res) {
    let book = req.body
    if(!book.author)
    res.send({msg:"ID not present"})
    else{
    
        // let bookCreated = await BookModel.create(book)
        if(!isValidObjectId(book.author)){
        res.send({msg:"Enter valid ID"})
        }
        else{
            let bookCreated = await BookModel.create(book)
            res.send({data: bookCreated}) 
        }

    }
}
const createBook1= async function (req, res) {
    let book = req.body
    if(!book.publisher)
    res.send({msg:"ID not present"})
    else{
    
        // let bookCreated = await BookModel.create(book)
        if(!isValidObjectId(book.publisher)){
        res.send({msg:"Enter valid ID"})
        }
        else{
            let bookCreated = await BookModel.create(book)
            res.send({data: bookCreated}) 
        }

        // let updated = await BookModel.updateMany({$and:[{}]},{$set:{isHardCover:true}})
        
    }
}
// await publisherModel.find({name:"penguin"}).select({_id:1})



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await BookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}
// const getBooksWithPublisherDetails = async function (req, res) {
//     let specificBook = await BookModel.find().populate('publisher')
//     res.send({data: specificBook})
// }
// const updateKey=async function(req,res){
//     // let updated = await BookModel.updateMany({$and:[{}]},{$set:{isHardCover:true}})
//     let updated=await specificBook.updateMany({},{$set:{isHardCover:true}})
// }
const updateKey=async function(req,res){
    let getId=await PublisherModel.find({name:"Bhavi"}).select({_id:1})
    let updated= await BookModel.updateMany({publisher:getId._id},{$set:{isHardCover:true}})
    res.send({msg:updated})
}


    

module.exports.createBook= createBook
module.exports.createBook1= createBook1
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateKey = updateKey
// module.exports.getBooksWithPublisherDetails = getBooksWithPublisherDetails
