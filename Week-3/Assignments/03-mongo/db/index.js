const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kartikturak1:Hqx6I1Y44Ncprvo6@cluster0.c38xdfe.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,password:String
});

const UserSchema = new mongoose.Schema({
    username : String,password:String,coursePurchased:String
});

const CourseSchema = new mongoose.Schema({

    id:Number,title:String,description:String,price:Number,imageLink:String,published:Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
