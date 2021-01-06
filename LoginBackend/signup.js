var express=require('express')
var cors=require('cors')
var app=express()
var fs=require('fs')
var bodyParser=require('body-parser')
const http = require('http');


app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

const dbName = "Quick_Finder";

app.get('/',function(req,res){
  res.send("Hello")
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
          // console.log("Connected correctly to server");
          const db = client.db(dbName);

          db.collection("Users").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(uname," ",pass);
          for(var i=0;i<result.length;i++){
            console.log(result[i].UserName,result[i].PassWord);
            if(uname===result[i].name && pass===result[i].password){
              // redirect to profile page
              console.log("Logged In");
              res.json({mes:"Welcome"})
              loggedin=true
              // console.log("Logged In ",uname," ",pass," ",result[i].name," ",result[i].password);
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
          // console.log("Connected correctly to server");
          const db = client.db(dbName);

          // Use the collection "people"
          const col = db.collection("Users");

          let personDocument = {
              "name": uname,
              "sname": sname,
              "password": password,
              "mobile": mobile,
              "email": email,
              "address":address
          }

          // Insert a single document, wait for promise so we can read it back
          console.log("Started");
          const p = await col.insertOne(personDocument);
          console.log("Done");
          res.send(personDocument);
          // const myDoc = await col.findOne();
          // Print to the console
          // console.log(myDoc);
          // res.send(myDoc)

         } catch (err) {
          console.log(err.stack);
      }
      finally {
         await client.close();
     }
   }
   run().catch(console.dir);
})

app.listen(3005, () => {
  console.log("listening");
});
