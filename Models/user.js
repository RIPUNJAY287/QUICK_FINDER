var mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    "name": {
        type:String
    },
    "sname": {
        type:String
    },
    "password": {
        type:String
    },
    "mobile": {
        type:Number
    },
    "email": {
        type:String
    },
    "address":{
        type:String
    },
    "activated":{
        type:Boolean,
        default:false
    }
});
const user = mongoose.model('Users',UserSchema);
module.exports = user;
