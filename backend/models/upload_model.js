const mongoose = require('mongoose');
const schema = mongoose.Schema;

const uploadSchema = new schema({
  image_name:String,
});

const uploadModel = mongoose.model('Upload_Images',uploadSchema);
module.exports = uploadModel;
