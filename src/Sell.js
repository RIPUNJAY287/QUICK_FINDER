import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Dia from "./dialog";
import Box from "./diaset";
import Head from "./head";
import "./Signup.css";
import {Redirect} from "react-router-dom";

class Sell extends React.Component{
  constructor(props){
   super(props);

     this.onchangeName = this.onchangeName.bind(this);
     this.onchangeType = this.onchangeType.bind(this);
     this.onchangeStatus = this.onchangeStatus.bind(this);
     this.onchangePrice = this.onchangePrice.bind(this);
     this.onchangeDescription = this.onchangeDescription.bind(this);
     this.onsubmit  = this.onsubmit.bind(this);
     this.onchangeFiles = this.onchangeFiles.bind(this);

   this.state ={
     product_name :'',
     product_type :'',
     status :'',
     price : '',
     description:'',
     selectedFiles :null,
     isSubmit :false
   };
  }

 onchangeName(e){
   this.setState({
     product_name: e.target.value
   });
 }

 onchangeType(e){
   this.setState({
     product_type: e.target.value
   });
 }
 onchangeStatus(e){
   this.setState({
     status: e.target.value
   });
 }
 onchangePrice(e){
   this.setState({
     price: e.target.value
   });
 }
 onchangeDescription(e){
   this.setState({
     description: e.target.value
   });
 }
onchangeFiles(e){
   this.setState({
     selectedFiles : e.target.files
   });
}

async onsubmit(e){
  e.preventDefault();
  var currentuser = sessionStorage.username;
  var formdata =  new FormData();
  formdata.append('product_name' , this.state.product_name);
  formdata.append('product_type' , this.state.product_type);
  formdata.append('status' , this.state.status);
  formdata.append('price' , this.state.price);
  formdata.append('description' , this.state.description);
  for (var i = 0;i<this.state.selectedFiles.length;i++) {
    formdata.append(`files${i}`,this.state.selectedFiles[i]);
 }
 var userdata = {
   SellerId : currentuser,
   ProductId : "600c882615877370d8e380b8"
 };



try{
  var res1 = await  axios({
    method: 'post',
    url: 'http://localhost:5000/backend/SellNow',
    data: formdata,
    headers: {'Content-Type': 'multipart/form-data' }
  });
  console.log(res1);
  var  res2  = await axios({
       method:'post',
       url :'http://localhost:5000/backend/Products',
       data: userdata,
       header :{'Content-Type': 'application/json'}
     });
  console.log(res2);
      this.setState({
      product_name :'',
      product_type :'',
      status :'',
      price : '',
      description:'',
      selectedFiles :null,
      isSubmit :true
    });
  }
  catch(err)
   {
    console.log(err);
   }
}

/*  var req1 = await fetch('http://localhost:5000/backend/SellNow',
    {
    method: 'post',
    data: JSON.stringify({formdata}),
    headers: {'Content-Type': 'multipart/form-data' }
  });
  var res1 =  await req1.json();
  var req2 = await fetch('http://localhost:5000/backend/Products',
       {method:'post',
       data: JSON.stringify({userdata}),
       header :{'Content-Type': 'application/json'}
     });

  var res2 = await req2.json();
  this.setState({
    product_name :'',
    product_type :'',
    status :'',
    price : '',
    description:'',
    selectedFiles :null,
    isSubmit :true
  });
*/

  render(){
    console.log(this.state);
     var isSubmit = this.state.isSubmit;

    if(isSubmit){
       return (
         <div>
             <Redirect to= "/Quick_Finder/" />
        </div>
         )
    }
    else{
    return (<>
   <div class="container pt-3" style={{width:'80%',height:'500px',marginLeft:'10%',boxShadow:'0px 0px 72px rgb(0,0,0,0.16)',backgroundColor:'white'}}>
   <h2 style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px',textAlign:'center'}}> Sell Your Product  </h2>
   <div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}>Product Information</div>
   <form style={{marginTop:'30px'}} onSubmit = {this.onsubmit} enctype="multipart/form-data" >
    <table style={{width:'40%',float:'left'}}>
        <tr><td><label for="Product Name">Product Name</label></td></tr>
        <tr><td><input type="text" required class="form-control" name = "product_name" id="mobile" onChange ={this.onchangeName} value={this.state.product_name} /></td></tr>
        <tr><td><label for="Product Type">Product Type</label></td></tr>
        <tr><td><input type="text" required class="form-control" name="product_type" id="mobile" onChange={this.onchangeType} value ={this.state.product_type}/></td></tr>
        <tr><td><label for="Status">Status</label></td></tr>
        <tr><td><input type="text" required class="form-control" name="status" id="mobile" onChange={this.onchangeStatus} value= {this.state.status}/></td></tr>
        <tr><td><label for="Price">Price</label></td></tr>
        <tr><td><input type="text" required class="form-control" name="price" id="mobile"  placeholder="In rupees"  onChange={this.onchangePrice} value={this.state.price}/></td></tr>
    </table>
    <table style={{width:'40%',float:'right'}}>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td><label for="Description">Description</label></td></tr>
        <tr><td><input type= "text" class="form-control" name="description" id ="mobile" onChange={this.onchangeDescription} value={this.state.description}/></td></tr>
         <br/>
        <tr><td><input type="file" required class="btn ml-0" id="signup" name="Upload" onChange={this.onchangeFiles} multiple/></td></tr>
        <br/>
        <br/>
          <input type="submit" class="btn btn-default" id="login" value="Sell Now" />
    <br></br>
    </table>
  </form>

  </div>

</>);
  }
 }

}
export default Sell;
