const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

const zod = require("zod");

const usernameSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    // Your code here

    const checkUsername = usernameSchema.safeParse(username);
    const checkPassword = passwordSchema.safeParse(password);

    if(!checkUsername.success || !checkPassword.success){
        return null;
    }


    const token = jwt.sign({
        username
    },jwtPassword)

    return token;
}

function verifyJwt(token) {
    // Your code here

    try{
        jwt.verify(token,jwtPassword);
        return true;
    }catch(e){

    }
    return false;
}
function decodeJwt(token) {
    // Your code here

    const decoded = jwt.decode(token);

    if(decoded){
        return true;
    }else{
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
