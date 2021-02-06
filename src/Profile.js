import React from 'react';
import ReactDOM from 'react-dom';
import Dia from "./dialog"
import Box from "./diaset"
import Head from "./head"
import "./Signup.css"
import {Link} from "react-router-dom";
class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
                fname:"",
                sname:"",
                mobile:"",
                email:"",
                address:"",       
              };
              // this.getUserData();
              this.getUserData = this.getUserData.bind(this);
             }
             getUserData(){
              var obj ={};
              obj.username=sessionStorage.username;
              console.log(obj.search_input);
              fetch('http://localhost:4000/getUserData', {
                  method: 'post',
                  body : JSON.stringify({obj}),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                }).then((res) => res.json())
             .then((json) => {
              console.log(json.mes.length);        
              var meslen=json.mes.length;
              // this.setState({getting:json.mes});         
              this.setState({getting:json.mes})
            });
            return;
          }
  render(){
    return (<>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link" to="/QUICK_FINDER/usersells">Yours Sell</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/QUICK_FINDER/userbuys">Yours Buy</Link>
  </li>
  </ul>
   <div class="container pt-3" style={{width:'80%',height:'500px',marginLeft:'10%',boxShadow:'0px 0px 72px rgb(0,0,0,0.16)',backgroundColor:'white'}}>   
   <form style={{marginTop:'30px'}}>
    <table style={{width:'40%',float:'left'}}>
        <tr><td><div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}>Personal Information</div></td></tr>
        <tr><td><label for="mobile">First Name</label></td></tr>
        <tr><td><label for="mobile">{this.state.fname}</label></td></tr>
        <tr><td><label for="mobile">Mobile</label></td></tr>
        <tr><td><label for="mobile">{this.state.mobile}</label></td></tr>
        <tr><td><label for="mobile">Email</label></td></tr>
        <tr><td><label for="mobile">{this.state.email}</label></td></tr>
    </table>
    <table style={{width:'40%',float:'right'}}>
        <tr><td><label for="mobile">Second Name</label></td></tr>
        <tr><td><label for="mobile">{this.state.sname}</label></td></tr>
        <tr><td><label for="mobile">Address</label></td></tr>
        <tr><td><label for="mobile">{this.state.address}</label></td></tr>
        <tr><td><label for="mobile">Password</label></td></tr>
        <tr><td><label for="mobile">***********</label></td></tr>

    </table>
  
  </form>  
  </div>    
  



</>);
  }
}
export default Profile;