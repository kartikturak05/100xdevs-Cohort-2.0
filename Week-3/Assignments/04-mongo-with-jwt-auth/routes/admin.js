const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECREAT} = require("../config")
const {Admin} = require("../db");
const {User} = require("../db")
const {Course} = require("../db")


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    //if a user with this username exists

    await Admin.create({
        username : username,
        password : password
    }).then(function(){
        res.json({  
            msg:"admin created succesfully"
        })
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        },JWT_SECREAT)
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg : "Incorrect username or password"
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

   const newCourse =  await Course.create({
        title,
        description,
        imageLink,
        price
    });

    res.json({
        msg:"Course created successfully",
        courseId :newCourse.id
    });
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    
});

module.exports = router;
