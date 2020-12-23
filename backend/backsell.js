const express = require('express');
const cors = require('cors');
const app  = express();
const router = express.Router();
const multer = require('multer');
const fs    = require('fs');
var path = require('path');
var sellProduct = require('./models/sell_model');
var bodyParse = require('body-parser');
app.use(cors());
app.use(bodyParse.urlencoded({
  extended:true
}));
app.use(bodyParse.json());


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'../public/uploadpics');
  },
  filename: (req, file, cb) => {
    //cb(null,file.originalname+"_"+Date.now()+path.extname(file.originalname));
    cb(null,(file.originalname));

  }
});
const filefilter = (req,file,cb)=>{
  if(file.mimetype=== 'image/jpeg' || file.mimetype==='image/jpg'|| file.mimetype==='image/png')
    {cb(null,true);
    }
  else{
    cb({message:'Unsupported file format'},false);
   }
};
var upload = multer({
  storage: storage,
  limit:{
    fileSize:1024*1024*5
  },
  fileFilter:filefilter
});


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority",
  { useNewUrlParser:true,
    useUnifiedTopology:true
  });
router.get('/',(req,res) =>{
  res.send("Hello world backsell");
});

router.post("/SellNow",upload.any('Upload'),(req,res,next) => {
  var Name         = req.body.product_name;
  var Type         = req.body.product_type;
  var Status       = req.body.status;
  var Price        = req.body.price;
  var Description  = req.body.description;
 // create a document to be inserted
   var newproduct = sellProduct({
     product_name : Name,
     product_type : Type,
     status       : Status,
     price        : Price,
     description  : Description,

   });
/*
images :{
  data : fs.readFileSync('/uploads/'+req.file),
  contentType : 'image/*'
}
 if(req.file){
     newproduct.images = req.file.path;
   }
   if(!req.file){
     res.send("file send error");
   }

  if(req.files.filename){
    let path='';
    req.files.forEach(function(files,index,arr){
      path = path + files.path + ',';
    });
    path = path.substring(0,path.lastIndexOf(","));
    newproduct.images  = path;
    req.send(path);
   }
*/

   newproduct.save()
   .then(response =>{
      res.json({
        message:'New Product Added'
      });
   }).catch(errot =>{
     res.json({
       message:'An error Occured'
     });
   });
});
app.use('/backend',router);
app.use('/uploads',express.static(__dirname+'../public/uploads/'));
app.listen(5000);
