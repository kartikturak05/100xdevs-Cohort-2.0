const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kartikturak1:sb5DcPzpFRceEtVi@cluster1.mrr2uhd.mongodb.net/Todo-app")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}

