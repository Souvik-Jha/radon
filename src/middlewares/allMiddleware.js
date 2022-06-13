const checkFree = function(req,res,next){
if (!(req.headers.isfreeappuser== "true"||req.headers.isfreeappuser== "false")){
    return res.send("the request is missing a mandatory header")
}

if(req.headers.isfreeappuser== "true"){
    req.body.isFreeAppUser = true
}else{
    req.body.isFreeappUser = false
}
next()


}
module.exports.checkFree = checkFree