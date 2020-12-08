import React from 'react';
import ReactDOM from 'react-dom';
import Dia from "./dialog"
import Box from "./diaset"
import Head from "./head"
import "./Signup.css"
import {Link} from "react-router-dom";
class Signup extends React.Component{
  render(){
    return (<>
   <div class="container pt-3" style={{width:'80%',height:'500px',marginLeft:'10%',boxShadow:'0px 0px 72px rgb(0,0,0,0.16)',backgroundColor:'white'}}>
   <form style={{marginTop:'30px'}}>
    <table style={{width:'40%',float:'left'}}>
        <tr><td><div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}><span style={{fontFamily:'arial',color:'#6A6666',fontWeight:'700'}}>Welcome to</span> Quick Finder</div></td></tr>
        <tr><td><div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}>Personal Information</div></td></tr>
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
    </table>
    <table style={{width:'40%',float:'right'}}>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" /></td></tr>  
        <Link to="/QUICK_FINDER/" type="submit" class="btn btn-default" id="login">Login</Link>
        <Link  to ="/Quick_FINDER/Signup"  class="btn ml-5" id="signup">Create Profile</Link><br></br><br></br>
    </table>
  
  </form>  
  </div>    
  



</>);
  }
}
export default Signup;