const ProductModel=require("../models/productModel")


const createProduct=async function(req,res){
    const data=req.body
    const created=await ProductModel.create(data)
    res.send({msg:created})
}

module.exports.createProduct=createProduct