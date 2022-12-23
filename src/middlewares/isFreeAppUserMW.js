const isFreeAppUser= function(req,res,next){
    const data=req.headers
    console.log(data)
    if(data.isfreeappuser)
    next()
    return res.send({msg:"not present"})
    
}
module.exports.isFreeAppUser=isFreeAppUser
