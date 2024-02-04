const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kartikturak1:sb5DcPzpFRceEtVi@cluster1.mrr2uhd.mongodb.net/courses');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password:String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password:String,
    coursePurchased:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({

    title:String,
    description:String,
    price:Number,
    imageLink:String,published:Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
