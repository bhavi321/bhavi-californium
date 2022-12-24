const isFreeAppUser= function(req,res,next){
    if(req.headers.isfreeappuser)
    next()
    else
    return res.send({msg:"request is missing a mandatory header"})
    
}
module.exports.isFreeAppUser=isFreeAppUser
