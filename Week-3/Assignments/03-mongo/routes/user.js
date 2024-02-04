const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course} = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic

    const username = req.headers.username;
    const password = req.headers.password;

    User.create({
        username,
        password
    });

    res.json({
        msg:"User created successfully"
    })

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic

    const response = await Course.find({})

    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne({
            username:username
        },{
            "$push":{
                coursePurchased: new mongoose.Types.ObjectId(courseId)
            }
    }).catch(function(e){
            console.log(e)
        });
    res.json({
        msg : "purchase complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
       username : req.headers.username
    })

    console.log(user.coursePurchased)
    const course = await Course.find({
            _id:{
                "$in":user.coursePurchased
            }
    })

    res.json({
        courses:course
    })





});

module.exports = router
