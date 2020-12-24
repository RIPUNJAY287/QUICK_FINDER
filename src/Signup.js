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
   <form style={{marginTop:'30px'}} action="http://localhost:3005/signup" method="post">
    <table style={{width:'40%',float:'left'}}>
        <tr><td><div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}><span style={{fontFamily:'arial',color:'#6A6666',fontWeight:'700'}}>Welcome to</span> Quick Finder</div></td></tr>
        <tr><td><div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}>Personal Information</div></td></tr>
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile1" name="username" method="post"/></td></tr>
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
        <Link to="/QUICK_FINDER/login" class="btn btn-default" id="login">Login</Link>
        <tr><td><input type="submit" class="btn btn-default" value="Create Profile" id="signup"/></td></tr>
    </table>
  </form>
  </div>
</>);
  }
}
export default Signup;
