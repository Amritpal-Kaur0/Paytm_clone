const express = require('express');
const { signupBody,signinBody ,updateBody,authMiddleware } = require('../middleware/index');
const {User,Account} = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router=express.Router();

router.post('/signup',async(req,res,)=>{
const {success}=signupBody.safeParse(req.body);

if(!success){
     return res.status(400).json({message: "Error while creating user"});
}

const {username,firstName,lastName,password}=req.body;

const hashedPassword=await bcrypt.hash(password,10);

    // check if user already exists
console.log("Searching for user with username:", username);
const finduser = await User.findOne({ username : username});
console.log("Found user:", finduser);
    if(finduser){
        return res.status(411).json({message: "Email already taken / Incorrect inputs"});
    }
  
    // create new user
    const user=await User.create({
        username,
        firstName,
        lastName,
        password:hashedPassword
    })
    const userId=user._id;

    await Account.create({
        userId:userId,
        balance : 1+ Math.random()*10000
    })

    const token =  jwt.sign({userId},process.env.JWT_SECRET);

    res.json({
    message: "User created successfully",
    token: token
    })

});


router.post('/signin',async(req,res)=>{
 const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

 const {username,password}=req.body;
 // check if user exists
 const user=await User.findOne({username:username});

 if(user && await bcrypt.compare(password,user.password)){
    const token= jwt.sign({userId:user._id},process.env.JWT_SECRET);

    res.json({
        token: token
    })
    return;
 }
res.status(411).json({
    message: "Error while logging in"
})
});


router.put('/',authMiddleware,async(req,res)=>{
    const {success}=updateBody.safeParse(req.body);
    if(!success){
        return res.status(400).json({message: "Error while updating"});
    }
    await User.updateOne({_id:req.userId},req.body);
    res.json({
        message: "User updated successfully"
    })

});

router.get('/bulk',async(req,res)=>{
    const filter =req.query.filter ||"";

    const users =await User.find({
        $or:[{
            firstName:{
                "$regex":filter,
            }
        },{
            lastName:{
                "$regex":filter,
            }
        },{
            username:{
                "$regex":filter,
            }
        }]
    })
    //for each user, we  want to send the id, firstName, lastName, and username
   
    res.json({
        user:users.map(user=>({
            id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            username:user.username,
        }))
    })

});





module.exports=router;