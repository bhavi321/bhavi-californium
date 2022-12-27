const jwt=require("jsonwebtoken")
const authenticateUser=async function(req,res,next){
    let token=req.headers["x-auth-token"]
    if(!token){
      return res.send({msg:"token is required"})
    }
    let decodedToken=jwt.verify(token,"Function-up californium secret key")
    if(!decodedToken)
    res.send({msg:"token is invalid"})
if(decodedToken._id!=req.params.userId)
    return res.send({status:false,msg:"The loggedin User is not authorized "})
    next()
}
module.exports.authenticateUser=authenticateUser