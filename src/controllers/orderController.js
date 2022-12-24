const OrderModel = require("../models/orderModel");
const ProductModel = require("../models/productModel");
const UserModel = require("../models/userModel");

let createOrder=async function(req,res){
    const data=req.body
    const userID=req.body.userID
    const productID=req.body.productID
    if(!userID)
    return res.send({msg:"userID not present"})
    if(!productID)
    return res.send({msg:"productID not present"})

    if(req.headers.isfreeappuser=="true"){
      data.amount=0
      data.isFreeAppUser=true
      const created= await OrderModel.create(data)
   return res.send({msg:created})
    }
    
    else{
        const proID= await ProductModel.findById(req.body.productID)
        const usrID= await UserModel.findById(req.body.userID)
        if(usrID.balance>=proID.price){
           const updatedBalance= await UserModel.findByIdAndUpdate(data.userID,{$inc:{balance:-proID.price}})
            data.amount=proID.price
            data.isFreeAppUser=false
            const created= await OrderModel.create(data)
        return res.send({msg:created})
        }
        else{
           return res.send({msg:"insufficient balance"})
        }
   

    }
}


module.exports.createOrder=createOrder


//module.exports.checkExist=checkExist

// let checkExist= async function(req,res){
//     const userID=req.body.userID
//     const productID=req.body.productID
//     if(!userID)
//     res.send({msg:"userID not present"})
//     if(!productID)
//     res.send({msg:"productID not present"})

// }
// const proID= await ProductModel.findById(req.body.productID).select({_id:1})
// usrID.balance=usrID.balance-proID.price