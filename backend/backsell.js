const express = require('express');
const cors = require('cors');
const app  = express();
const router = express.Router();
const multer = require('multer');
const fs    = require('fs');
var path = require('path');
var sellProduct = require('./models/sell_model');
var uploadModel = require('./models/upload_model');

var bodyParse = require('body-parser');
app.use(cors());

app.use(bodyParse.urlencoded({
  extended:true
}));
app.use(bodyParse.json());


//connect to mongodb atlas
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority",
  { useNewUrlParser:true,
    useUnifiedTopology:true
  });



//uploading a image of product
var time;
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'../public/uploadpics/sellproducts');
  },
  filename: (req, file, cb) => {
     time = Date.now();
    cb(null,file.originalname+"_"+time+path.extname(file.originalname));

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


//Routing start from here

router.get('/',(req,res) =>{
  res.send("Hello world backsell");
});


router.post("/SellNow",upload.any('Upload'),(req,res,next) => {

  var Name         = req.body.product_name;
  var Type         = req.body.product_type;
  var Status       = req.body.status;
  var Price        = req.body.price;
  var Description  = req.body.description;

  console.log(req.body);
  console.log("here is file from requested part");
  console.log(req.files);

  var len = req.files.length;
  console.log(len);
// create a document to be inserted
   var newproduct = sellProduct({
     product_name : Name,
     product_type : Type,
     status       : Status,
     price        : Price,
     description  : Description,

    });
   for (var k = 0; k < len; k++) {
       newproduct.product_images[k] = req.files[k].originalname +"_"+time+path.extname(req.files[k].originalname);
    }
  console.log("send Object ");
  console.log(newproduct);

  
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

         res.send(newproduct);

   }).catch(errot =>{
     res.json({
       message:'An error Occured'
     });
   });
});
app.use('/backend',router);
app.use('/uploads',express.static(__dirname+'../public/uploadpics/'));
app.listen(5000);
