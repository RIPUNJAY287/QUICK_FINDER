const mongoose =require('mongoose');
const user = new mongoose.Schema({
    firstName:{
        type:String   
    },
    lastName:{
        type:String
    },
    mobile:{
        type:String   
    },
    email:{
        type:String
    },
    address:{
        type:String   
    },
    password:{
        type:String
    },
    
});
module.exports= User= mongoose.model('user',user);
