
const jwt = require("jsonwebtoken");

const value = {
    name : "kartik",
    account_no : 23456776543
}

const token = jwt.sign(value,"secretcode");
console.log(token);

let newValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2FydGlrIiwiYWNjb3VudF9ubyI6MjM0NTY3NzY1NDMsImlhdCI6MTcwNjE4Mjg4Mn0.UMdosCA0HrrU5ipPQ2mQn9ACTOQxRbyhd_VuHi28VuM";
const verified = jwt.verify(newValue,'secretcode');

console.log(verified);
