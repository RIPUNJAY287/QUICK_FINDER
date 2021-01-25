const express=require('express');
const mongoose =require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.get('/',async(req,res)=>{
    const{firstName,lastName,mobile,email,address,password}=req.body;
    let user = {};
    user.firstName=firstName;
    user.lastName=lastName;
    user.mobile=mobile;
    user.email=email;
    user.address=address;
    user.password=password;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});
module.exports = route;
