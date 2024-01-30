const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://kartikturak1:Hqx6I1Y44Ncprvo6@cluster0.c38xdfe.mongodb.net/");

const User = mongoose.model("Users",{name : String , email:String,password:String});

// const user = new User({
//     name:"kartik",
//     email:"kartikturak1@gmail.com",
//     password:"kartik@123"
// });

app.post("/signup",async function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({email:email});

    if(existingUser){
        return res.status(404).send("Username already exists");
    }

    const user = new User({
        name:name,
        email:email,
        password:password
    });

    user.save();

    res.json({
        "msg":"user created successfully"
    })
});

app.listen(3000)



