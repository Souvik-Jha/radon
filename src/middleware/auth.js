const jwt = require("jsonwebtoken");

let userValidation = function(req, res, next){
   try{ let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
     console.log(token);
    

    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is invalid" });
      next()
}
catch (err) {
    console.log("This is the error :", err.message)
    return res.status(500).send({ msg: "Error", error: err.message })
}
}


let authorization = function(req,res,next){
    try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, 'functionup-radon')
        //userId for which the request is made. In this case message to be posted.
        let userToBeModified = req.params.userId
        //userId for the logged-in user
        let userLoggedIn = decodedToken.userId
    
        //userId comparision to check if the logged-in user is requesting for their own data
        if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
        next()
    }catch (err) {
        console.log("This is the error :", err.message)
        return res.status(500).send({ msg: "Error", error: err.message })
    }
}


module.exports.userValidation = userValidation
module.exports.authorization = authorization