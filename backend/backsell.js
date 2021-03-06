const express = require('express');
const cors = require('cors');
const app  = express();
const router = express.Router();
const multer = require('multer');
const fs    = require('fs');
var path = require('path');
var sellProduct = require('./models/sell_model');
var userProduct = require('./models/user_product_model');
var  ObjectID = require('mongodb').ObjectID;
var Loginbac=require('../LoginBackend/signup')

var bodyParse = require('body-parser');
app.use(cors());

app.use(bodyParse.urlencoded({
  extended:true
}));
app.use(bodyParse.json());


const mongoClient = require('mongodb').MongoClient;
const mongodbclient = new mongoClient("mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority",
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
  var seller       = req.body.seller;
  console.log(seller);
  console.log(req.files);
  console.log("here is file from requested part");
  console.log(req.body);
  var len   = req.files.length;

  async function run() {
 try {
   await mongodbclient.connect();
   console.log("connection is established !");
   var database = mongodbclient.db("Quick_Finder");
   var sellProductCollection = database.collection("sellProducts");
 // create a document to be inserted
   var sellproduct = sellProduct({
     product_name : Name,
     product_type : Type,
     status       : Status,
     price        : Price,
     description  : Description,
     sold: false,
     seller : seller,
     buyer :""
    });

  for (var k = 0; k < len; k++) {
      sellproduct.product_images[k] = req.files[k].originalname +"_"+time+path.extname(req.files[k].originalname);
   }
    console.log(sellproduct);
   var result1 = await sellProductCollection.insertOne(sellproduct);
   console.log(
     `${result1.insertedCount} documents were inserted with the _id: ${result1.insertedId}`,
   );
   var ProductId = result1.insertedId.toString();
   console.log(ProductId);
   res.send(ProductId);
 } finally {
 }
 }
run().catch(console.dir);

});


router.post("/Products",(req,res,next)=>{
  console.log(req.body);
  var seller   = req.body.SellerId;
  var product  = req.body.ProductId;

    async function run() {
   try {
     await mongodbclient.connect();
     console.log("connection is established !");
     var database = mongodbclient.db("Quick_Finder");
     var productsCollection = database.collection("userProducts");

     var sellerId = new ObjectID(seller);
     var productId = new ObjectID(product);
     console.log(seller);
     console.log(product);
       var productObject = {
         ProductId : productId,
         Time : new Date(),
         Sold : false,
         BuyerId : ""
       };

         var userproduct = userProduct({
           _id : new ObjectID(sellerId),
           sell: productObject,
           buy:null
         });


        var result2 = await productsCollection.
        updateOne({"_id":sellerId},
        {$addToSet : {"sell": productObject}},
        {upsert:true});

        console.log(
          `${result2.insertedCount} documents were inserted with the _id: ${result2.insertedId}`,
        );
        res.send(req.body);
      } finally {
      }
      }
     run().catch(console.dir);
});


router.post("/usersellproduct",(req,res)=>{
  var id   = req.body.userdata.Id;
  console.log(id);

     async function run() {
   try {
     await mongodbclient.connect();
     console.log("connection is established !");
     var database = mongodbclient.db("Quick_Finder");
     var productsCollection = database.collection("userProducts");

     var Id = new ObjectID(id);
     console.log(Id);
       var array = [];

        var result3 = await productsCollection.
        find({_id:Id}).toArray((err,result)=>{
           if(err) throw err;


            for(var i=0;i<result[0].sell.length;i++){
             var sell = {};
             sell.BuyerId = result[0].sell[i].BuyerId.toString();
             sell.ProductId = (result[0].sell[i].ProductId).toString();
             sell.Sold = result[0].sell[i].Sold.toString();
             sell.Time = result[0].sell[i].Time.toString();
             array.push(sell);
           }
             console.log(array);
             res.send(array);
          });

      } finally {
      }
      }
     run().catch(console.dir);


});


router.post("/userbuyproduct",(req,res)=>{
  var id   = req.body.userdata.Id;
  console.log(id);

     async function run() {
   try {
     await mongodbclient.connect();
     console.log("connection is established !");
     var database = mongodbclient.db("Quick_Finder");
     var productsCollection = database.collection("userProducts");

     var Id = new ObjectID(id);
     console.log(Id);
       var array = [];

        var result3 = await productsCollection.
        find({_id:Id}).toArray((err,result)=>{
           if(err) throw err;

           for(var i=0;i<result[0].purchased.length;i++){
            var purchased = {};
            purchased.BuyerId = result[0].purchased[i].SellerId.toString();
            purchased.ProductId = (result[0].purchased[i].ProductId).toString();
            purchased.Time = result[0].purchased[i].Time.toString();
            array.push(purchased);
          }
            console.log(array);
            res.send(array);
        });

      } finally {
      }
      }
     run().catch(console.dir);


});

router.post("/buy",(req,res)=>{
  var buyerID = req.body.buyDetails.buyerID
  var sellerID = req.body.buyDetails.sellerID
  var productID = req.body.buyDetails.productID
   console.log(req.body.buyDetails);
     async function run() {
   try {
     await mongodbclient.connect();
     console.log("connection is established !");
     var database = mongodbclient.db("Quick_Finder");
     var Buy = database.collection("userProducts");

     let buyDocument = {
       "SellerId": new ObjectID(sellerID),
       "ProductId": new ObjectID(productID),
       "Time" : new Date()
     }
     console.log(buyDocument);
     var BuyerId = new ObjectID(buyerID);

      var result = Buy.updateOne({"_id":BuyerId},
     {$addToSet : {"purchased":buyDocument}},
     {upsert:true});

     res.send(req.body);
      } finally {
      }
      }
     run().catch(console.dir);


});

/*
router.post("/addrequests",(req,res)=>{
  var seller   = req.body.userid.SellerId;
  var buyer    =  req.body.userid.BuyerId;
  var product  = req.body.userid.ProductId;
  console.log(id);

     async function run() {
   try {
     await mongodbclient.connect();
     console.log("connection is established !");
     var database = mongodbclient.db("Quick_Finder");
     var productsCollection = database.collection("userProducts");

     var SellerId = new ObjectID(seller);
     var BuyerId = new ObjectID(buyer);
     var ProductId = new ObjectID(product);
   var result2 = await productsCollection.bulkwrite(
      [
        {
          updateOne :
             {
                 "filter" : {"_id":SellerId},
                 "update" :{$addToSet:{"sell":{$elemMatch:{ProductId:{$elemMatch:{Requests : BuyerId}}}}}},
                 "upsert" :true
            }
        },
        {
          updateOne :
            {
                "filter" : {"_id":BuyerId},
                  "update" :{$addToSet:{"purchased":{$elemMatch:{ProductId:{$elemMatch:{Requests : BuyerId}}}}}},
                  "upsert" :true
          }
        }
     ]
   );

      } finally {
      }
      }
     run().catch(console.dir);


});
*/

app.use(Loginbac)
app.use('/backend',router);
app.use('/uploads',express.static(__dirname+'../public/uploadpics/'));
app.use('/uploads',express.static(__dirname+'../public/'));
app.listen(5000,()=>{
  console.log("Listening");
});
