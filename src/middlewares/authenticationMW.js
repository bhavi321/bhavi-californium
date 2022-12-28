const jwt=require("jsonwebtoken")
const authenticateUser=async function(req,res,next){
    let token=req.headers["x-auth-token"]
    if(!token){
      return res.send({msg:"token is required"})
    }
   
    
    jwt.verify(token,"Function-up californium secret key",(err)=>{
      if(err)
      {return res.send({result:"invalid token"})}
  
  })
  let decodedToken=jwt.verify(token,"Function-up californium secret key")
if(decodedToken.userId!=req.params.userId)
    return res.send({status:false,msg:"The loggedin User is not authorized "})

    return next() 
}
module.exports.authenticateUser=authenticateUser

 // let decodedToken=jwt.verify(token,"Function-up californium secret key")
    // if(!decodedToken)
    // res.send({msg:"token is invalid"})  