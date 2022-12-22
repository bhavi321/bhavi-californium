const {isValidObjectId}=require("mongoose")
const BookModel= require("../models/bookModel")
const PublisherModel=require("../models/publisherModel")
const AuthorModel=require("../models/authorModel")

//Q3------------------------
const createBook= async function (req, res) {
const {name,rating,publisher,author,price}=req.body
if(!author){
    return res.send({msg:"author is required"})
}
if(!publisher){
    return res.send({msg:"publisher is required"})
}
const authorDetails=await AuthorModel.findOne({_id:author})
if(!authorDetails)
return res.send({msg:"author does not exist"})

const publisherDetails=await PublisherModel.findOne({_id:publisher})
if(!publisherDetails)
return res.send({msg:"publisher does not exist"})
let book= req.body
let bookCreated = await BookModel.create(book)
         res.send({msg: bookCreated}) 

}
//Q4-----------
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await BookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}
//Q5------------------

//A--------
const updateKey=async function(req,res){
    let getWithNames=await PublisherModel.find({name:{$in:["BlueRose","Penguin"]}})  
    const publisherIds=getWithNames.map(publisher=>publisher._id)
    let updated= await BookModel.updateMany({publisher:{$in:publisherIds}},{$set:{isHardCover:true}},{new:true})
    res.send({msg:updated})
}
//B---------
const updatePrice=async function(req,res){
    
    const updatedData=await BookModel.updateMany({ratings:{$gt:3.5}},{$inc:{"price":10}},{new:true})
res.send({msg:updatedData})
}


    

module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateKey = updateKey
module.exports.updatePrice = updatePrice

// module.exports.getBooksWithPublisherDetails = getBooksWithPublisherDetails
// 63a35ca0f255baa7a15f2b10
// 63a35ca0f255baa7a15f2b10




// Q3-------------
// let book = req.body
//     if(!book.author)
//     res.send({msg:"ID not present"})
//     else{
    
//         // let bookCreated = await BookModel.create(book)
//         let a=await AuthorModel.findById(book.author)
//         if(!a){
//         res.send({msg:"Enter valid ID"})
//         }
//         else{
//             let bookCreated = await BookModel.create(book)
//             res.send({data: bookCreated}) 
//         }

//     }
// }
// let getRating= await AuthorModel.find({rating:{$gt:3.5}}).select({_id:1})
    // for(let i=0;i<getRating.length;i++)
    // {
    // let updated=await BookModel.findByIdAndUpdate(getRating[i],{$inc:{price:10}},{new:true})
    // }


// const createBook1= async function (req, res) {
//     let book = req.body
//     if(!book.publisher)
//     res.send({msg:"ID not present"})
//     else{
    
//         // let bookCreated = await BookModel.create(book)
//         if(!isValidObjectId(book.publisher)){
//         res.send({msg:"Enter valid ID"})
//         }
//         else{
//             let bookCreated = await BookModel.create(book)
//             res.send({data: bookCreated}) 
//         }

//         // let updated = await BookModel.updateMany({$and:[{}]},{$set:{isHardCover:true}})
        
//     }
// }
//module.exports.createBook1= createBook1