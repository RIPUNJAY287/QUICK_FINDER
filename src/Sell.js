import React from 'react';
import ReactDOM from 'react-dom';
import Dia from "./dialog"
import Box from "./diaset"
import Head from "./head"
import "./Signup.css"
import {Link} from "react-router-dom";
class Sell extends React.Component{
  render(){
    return (<>
   <div class="container pt-3" style={{width:'80%',height:'500px',marginLeft:'10%',boxShadow:'0px 0px 72px rgb(0,0,0,0.16)',backgroundColor:'white'}}>
   <h2 style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px',textAlign:'center'}}>Sell Your Product</h2>
   <div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}>Product Information</div>
   <form style={{marginTop:'30px'}}>
    <table style={{width:'40%',float:'left'}}>
        <tr><td><label for="mobile">Product Name</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
        <tr><td><label for="mobile">Product Type</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>
        <tr><td><label for="mobile">Time</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
        <tr><td><label for="mobile">Price</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
    </table>
    <table style={{width:'40%',float:'right'}}>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td><label for="mobile">Description</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
        <tr><td><label for="mobile">Upload Pcs</label></td></tr>
        <tr><td>    <Link  to ="/Quick_FINDER/Signup"  class="btn ml-0" id="signup">Uplaod</Link></td></tr>  
            <br/>
        <Link to="/QUICK_FINDER/" type="submit" class="btn btn-default" id="login">Launch</Link>
    <br></br><br></br>
    </table>
  
  </form>  
  </div>    
  



</>);
  }
}
export default Sell;