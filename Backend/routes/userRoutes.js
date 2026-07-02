const express=require("express");
const router=express.Router();
const User=require("../models/user");
router.post("/register",async(req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.status(201).json({
            message:"User Registered Successfully"
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

// Login User
router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
        res.json({
            success: true,
            message: "Login Successful"
        });
    } else {
        res.json({
            success: false,
            message: "Invalid Email or Password"
        });
    }

});
module.exports=router;