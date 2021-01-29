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
const { ObjectId } = require('mongodb')
const { isEmptyBindingElement } = require('typescript')
const url = "mongodb+srv://Avengers8:RipunJay8@cluster0.prtvt.mongodb.net/Quick_Finder?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

const dbName = "Quick_Finder";
app.post('/filter',function(req,res){
  const request=req
  async function run() {
          await client.connect();
          // console.log("Connected correctly to server");
          const db = client.db(dbName);
          var array=[];
          array = await  db.collection("sellProducts").distinct("product_type");
          res.json({"mes":array})
        }
   run().catch(console.dir);
})
app.post('/getDetails',function(req,res){
  function filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
 }
  var search_input=req.body.obj.search_input;
  console.log("Ya its running ");
  const request=req
  async function run() {
          await client.connect();
          // console.log("Connected correctly to server");
          const db = client.db(dbName);
          var array=[];
          db.collection("sellProducts").find().toArray(function(err, result) {
          if (err) throw err;
          for(var i=0;i<result.length;i++){
            console.log(result[i].product_name);
            var obj={};
            obj.product_name=result[i].product_name;
            obj.product_type=result[i].product_type;
            obj.status=result[i].status;
            obj.price=result[i].price;
            obj.description=result[i].description;
            obj.product_id=ObjectId(result[i]._id).toString();
            obj.seller_id=result[i].seller;
            var seller_id= new ObjectId(result[i].seller);
            var sell_name="";
            var sell_address="";
            db.collection("Users").find({"_id":seller_id}).toArray(function(err, result2) {
            if (err) throw err;
            for(var j=0;j<1;j++){
            sell_name=result2[j].name;
            sell_address=result2[j].address;
            }
            obj.seller_name=sell_name;
            obj.seller_address=sell_address;
          });
            array.push(obj);  
          }
          var anoarray=filterByValue(array,search_input);
          anoarray=anoarray.concat(array);
          res.json({mes:anoarray});
  });
}
   run().catch(console.dir);  
});

app.listen(3005, () => {
  console.log("Server is running ");
});
