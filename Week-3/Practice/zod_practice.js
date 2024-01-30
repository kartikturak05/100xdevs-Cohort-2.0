
const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

// const schema = zod.number();
// const schema = zod.array(zod.number());


// lets make a schema to validate object
// object = {
//     email 
//     password :- which will constain min 8 letter
// }

const schema = zod.object({
    email: zod.string().email(),
    password : zod.string().min(8)
});

app.post("/health-checkup",function(req,res){
    const kidney = req.body;
    const response = schema.safeParse(kidney);

    if(!response.success){
        res.status(411).json({
            msg : "Invalid input"
        })
    }else{
        res.send({
            response
        })
    }
});
app.listen(3000);
