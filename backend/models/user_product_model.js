const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductSchema = new schema({
   _id : {type:schema.Types.ObjectId},
   sell: {type:[Object]},
   purchased: {type:[Object]}
});

const userProduct = mongoose.model('userProduct',ProductSchema);
module.exports = userProduct;
