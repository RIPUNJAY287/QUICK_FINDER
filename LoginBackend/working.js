var express=require('express')
var cors=require('cors')
var app=express()
var fs=require('fs')
var bodyParser=require('body-parser')
var Chat=require('../Models/ChatSchema')

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var http = require('http').Server(app);
var io = require('socket.io')(http,{'transports': ['websocket', 'polling']});

http.listen(4000, () => {
  console.log("listening");
});
io.on('connection', () =>{
  console.log('a user is connected')
  io.emit('message', 'hello');
 })

const mongoose=require('mongoose')

const url = "mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority";

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true},err=>{
  console.log("Connected to mongoose");
})

const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb')

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

const dbName = "Quick_Finder";

const path=require('path')

app.get('/',function(req,res){
  // res.send("Hello")
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/login',function(req,res){

  console.log(req.body.loginDetails.user_name);

  const uname=req.body.loginDetails.user_name
  const pass=req.body.loginDetails.pass_word

  console.log(uname,pass);
  var loggedin=false;

  const request=req
  async function run() {
          await client.connect();
          const db = client.db(dbName);

          db.collection("Users").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(uname," ",pass);
          for(var i=0;i<result.length;i++){
            console.log(result[i].UserName,result[i].PassWord);
            if(uname===result[i].name && pass===result[i].password){
              console.log("Logged In");
              res.json({mes:"Welcome",usern:result[i]._id})
              loggedin=true
            }
          }
          console.log("Done");
          if(!loggedin){
            console.log("Does not exist");
            res.json({mes:uname+"Does not exist"});
          }
        });
      }
   run().catch(console.dir);
})

app.post('/signup',function(req,res){

  var uname=req.body.signupDetails.fname
  var sname=req.body.signupDetails.lname
  var password=req.body.signupDetails.password
  var mobile=req.body.signupDetails.mobile
  var email=req.body.signupDetails.email
  var address=req.body.signupDetails.address

  async function run() {
     try {
          await client.connect();
          const db = client.db(dbName);

          const col = db.collection("Users");

          let personDocument = {
              "name": uname,
              "sname": sname,
              "password": password,
              "mobile": mobile,
              "email": email,
              "address":address
          }

          console.log("Started");
          const p = await col.insertOne(personDocument);
          console.log("Done");
          res.send(personDocument);

         } catch (err) {
          console.log(err.stack);
      }
      finally {
         await client.close();
     }
   }
   run().catch(console.dir);
})


app.post('/buy',function(req,res){

  const url = "mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority";

  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

  var buyerID=req.body.buyDetails.buyerID
  var sellerID=req.body.buyDetails.sellerID
  var productID=req.body.buyDetails.productID
  var datetime=req.body.buyDetails.DateTime

  let buyDocument = {
    "Time":datetime,
    "SellerId":new ObjectId("5ff5404a31512f1b0ad64a48"),
    "ProductId":new ObjectId("600c876d15877370d8e380b7")
  }
  console.log(buyDocument);

  async function run() {
     try {  
          await client.connect();
          const db = client.db(dbName);

          const col = db.collection("userProducts");

          await col.updateOne({ "_id": ObjectId(buyerID) },
                        { $push: { purchased: buyDocument }},
                        {upsert:true})

          console.log("buy Added");
          res.json({mes:buyDocument});

         } catch (err) {
          console.log(err.stack);
      }
      finally {
         await client.close();
     }  
   }
   run().catch(console.dir);
})

