const express = require("express");

const app = express();

function usermiddleware(req,res,next){
    if(username !="kartik" || password!="pass"){
        res.status(403).json({
            msg:"Incorrect user input"
        });
    }else{
        next();
    }
}

function kidneymiddleware(req,res,next){
    if(kidneyId != 1 && kidneyId !=2){
        res.status(403).json({

            msg:"Incorrect kidney inputs"
        })
    }else{
        next();
    }
}

app.get("/health-checkup",usermiddleware,kidneymiddleware,function(req,res){
    res.send("Your heart is healthy")
})

app.get("/kidney-check",usermiddleware,kidneymiddleware,function(req,res){
    res.send("Yout kidney is healthy");
})

app.get("/heart-check",usermiddleware,function(req,res){
    res.send("Your heart is healthy");
})

app.listen(3000)
