const PublisherModel=require("../models/publisherModel")

 const createPublisher=async function(req,res){
let data=req.body
    const getPublisher= await PublisherModel.create(data)
    res.send({msg:getPublisher})
}




module.exports.createPublisher=createPublisher
