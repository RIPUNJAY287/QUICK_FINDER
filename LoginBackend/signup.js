var express=require('express')
var cors=require('cors')
var app=express()
var fs=require('fs')
var bodyParser=require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://rishak192:Mongodb@192@firstproject.8maq4.mongodb.net/UserData?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

const dbName = "UserData";

app.get('/',function(req,res){
  res.send("Hello")
})

app.post('/login',function(req,res){
  const uname=req.body.user_name
  const pass=req.body.pass_word
  const request=req
  async function run() {
          await client.connect();
          // console.log("Connected correctly to server");
          const db = client.db(dbName);

          db.collection("User").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(uname," ",pass);
          for(var i=0;i<result.length;i++){
            console.log(result[i].UserName,result[i].PassWord);
            if(uname===result[i].name && pass===result[i].password){
              // redirect to profile page
              console.log("Logged In");
              // console.log("Logged In ",uname," ",pass," ",result[i].name," ",result[i].password);
            }
          }
          // res.send(req.body.user_name+"Rishak")
        });
      }
   run().catch(console.dir);
})

app.post('/signup',function(req,res){

  var uname=req.body.first_name
  var sname=req.body.sec_name
  var password=req.body.password
  var mobile=req.body.mobile
  var email=req.body.email
  var address=req.body.address

  async function run() {
     try {
          await client.connect();
          // console.log("Connected correctly to server");
          const db = client.db(dbName);

          // Use the collection "people"
          const col = db.collection("User");

          let personDocument = {
              "name": uname,
              "sname": sname,
              "password": password,
              "mobile": mobile,
              "email": email,
              "address":address
          }

          // Insert a single document, wait for promise so we can read it back
          const p = await col.insertOne(personDocument);
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

app.listen(3005,function(req,res){
  console.log('3005');
})
