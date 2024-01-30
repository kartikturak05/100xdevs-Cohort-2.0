
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

const ans = signJwt("kartik@gmail.com","dhdfdff")
console.log(ans)
