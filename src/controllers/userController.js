const UserModel=require("../models/userModel")
const createUser=async function(req,res){
    const data=req.body
    let userData=await UserModel.create(data)
    res.send({msg:userData})
}
module.exports.createUser=createUser