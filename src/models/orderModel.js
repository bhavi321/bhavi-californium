const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
userID: {type:ObjectId,
ref:"User"}
,
productID:{type:ObjectId,
    ref:"Product"},
amount:Number,
date:String,
isFreeAppUser:Boolean


}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)