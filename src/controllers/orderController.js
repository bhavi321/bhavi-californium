const OrderModel = require("../models/orderModel");

let createOrder=async function(req,res){
    const data=req.body
   const created= await OrderModel.create(data)
   res.send({msg:created})
}
module.exports.createOrder=createOrder