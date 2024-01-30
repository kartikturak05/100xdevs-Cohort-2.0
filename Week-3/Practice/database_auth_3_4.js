const express = require("express");
const { boolean } = require("zod");

const app = express();

function isOldEnough(age){
    if(age>= 14){
        return true;
    }
    else{
        return false;
    }
}

function isOldEnoughMiddleware(req,res,next){
    if(req.query.age >= 14){
        next();
    }
    else{
        res.status(411).json({
            msg :"Sorry you have not enough age to ride this ride"
        })
    }
}

app.use(isOldEnoughMiddleware); //it will run this for every routes after it no need to call this function

app.get("/ride2",isOldEnoughMiddleware, function(req,res){
        res.status(411).json({
            msg:"You have successfully riden the ride1"
        })
})


app.get("/ride1",function(req,res){

    if(isOldEnough(req.query.age)){
        res.json({
            msg:"You have successfully riden the ride1"
        })
    }else{
        res.status(411).json({
            msg :"Sorry you have not enough age to ride this ride"
        })
    }
})
app.listen(3000);
