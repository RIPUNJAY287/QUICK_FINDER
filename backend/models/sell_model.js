const mongoose = require('mongoose');
const schema = mongoose.Schema;

const sellProductSchema = new schema({
  product_name:{type: String},
  product_type:{type:String},
  status:{type:String},
  price:{type:String},
  description:{type:String},
  product_images:{type : [String]},
  sold:{type:Boolean},
  seller : {type:String},
  buyer : {type:String}
});
const sellProduct = mongoose.model('sellProduct',sellProductSchema);
module.exports = sellProduct;
