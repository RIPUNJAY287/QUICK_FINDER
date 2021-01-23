const express = require('express');
const mongoose = require('mongoose');
const url ="mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority";
const app = express();
// mongoose.connect(url,{useNewUrlParser:true});
// const con = mongoose.connection
// con.on('open',function(){
//     console.log('connected');
// })
// const router = require('./router/getdata');
// app.use('/getdata',router);
var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Quick_Finder");
    var query={password:"ripunjay"};
    dbo.collection("Users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
//   app.listen(5000,function(){
//     console.log('Server started.');
// });
