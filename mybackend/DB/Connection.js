const mongoose = require('mongoose');
const URI = "mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority";
const ConnectDB = async () =>{
    await mongoose.connect(URI,{useUnifiedTopology:true,useNewUrlParser: true});
    console.log('db connected ');
};

module.exports = ConnectDB;