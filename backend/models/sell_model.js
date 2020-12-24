const mongoose = require('mongoose');
const schema = mongoose.Schema;

const sellProductSchema = new schema({
  product_name:{type: String},
  product_type:{type:String},
  status:{type:String},
  price:{type:String},
  description:{type:String},
  images : {
    data:Buffer,
    contentType:String
  }
});
const sellProduct = mongoose.model('sellProduct',sellProductSchema,"sellProducts");
module.exports = sellProduct;
