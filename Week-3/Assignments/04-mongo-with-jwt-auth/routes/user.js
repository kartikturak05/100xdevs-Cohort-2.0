const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic

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

router.post('/signin', async(req, res) => {
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

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})

    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

    const username = req.username;

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

router.get('/purchasedCourses',userMiddleware, async(req, res) => {
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
