const express = require("express");
const {createTodo,updateTodo} = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

//creating a todo
//body{
    // title
    //description
//}
app.post("/todo",async function(req,res){
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }
    //put it in mangodb

    await todo.create({
        title:payload.title,
        description:payload.description,
        completed:false
    })

    res.json({
        msg : "Todo created"
    })
})

//getting a todo
app.get("/todo",async function(req,res){

    const todos = await todo.find();

    res.json({
        todos
    })
})

// mark completed to the todo
app.put("/completed",async function(req,res){

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
      _id:req.body.id  
    },{
        completed:true
    })
    res.json({
        msg : "Todo mark as completed done"
    })

})

app.listen(3000);
