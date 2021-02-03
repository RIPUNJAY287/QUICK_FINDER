var mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserProduct = new schema({
    "sell":{
        type:Array
    },
    "purchased":{
        type:Array
    }
});
const userProduct = mongoose.model('userProducts',UserProduct);
module.exports = userProduct;
