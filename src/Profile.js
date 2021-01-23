import React from 'react';
import ReactDOM from 'react-dom';
import Dia from "./dialog"
import Box from "./diaset"
import Head from "./head"
import "./Signup.css"
import {Link} from "react-router-dom";
class Profile extends React.Component{
  render(){
    return (<>
   <div class="container pt-3" style={{width:'80%',height:'500px',marginLeft:'10%',boxShadow:'0px 0px 72px rgb(0,0,0,0.16)',backgroundColor:'white'}}>
   <form style={{marginTop:'30px'}}>
    <table style={{width:'40%',float:'left'}}>
        <tr><td><div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}>Personal Information</div></td></tr>
        <tr><td><label for="mobile">First Name</label></td></tr>
        <tr><td><label for="mobile">Ankit</label></td></tr>
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><label for="mobile">8554797870</label></td></tr>
        <tr><td><label for="mobile">Email</label></td></tr>
        <tr><td><label for="mobile">ankitkumar1578114@gmail.com</label></td></tr>
    </table>
    <table style={{width:'40%',float:'right'}}>
        <tr><td><label for="mobile">Second Name</label></td></tr>
        <tr><td><label for="mobile">Kumar</label></td></tr>
        <tr><td><label for="mobile">Address</label></td></tr>
        <tr><td><label for="mobile">Kabeer Nagar Tindwari Banda</label></td></tr>
        <tr><td><label for="mobile">Password</label></td></tr>
        <tr><td><label for="mobile">***********</label></td></tr>

    </table>
  
  </form>  
  </div>    
  



</>);
  }
}
export default Profile;