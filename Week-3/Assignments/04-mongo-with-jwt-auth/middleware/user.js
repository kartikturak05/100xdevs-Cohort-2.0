const jwt = require("jsonwebtoken");
const {JWT_SECREAT} = require("../config")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedvalue = jwt.verify(jwtToken,JWT_SECREAT)
    if(decodedvalue.username){
        req.username = decodedvalue.userame;
        next();
    }else{
        res.status(402).json({
            msg : "You are not authorized"
        })
    }
}

module.exports = userMiddleware;
