import React from 'react';
import ReactDOM from 'react-dom';
import Dia from "./dialog"
import Box from "./diaset"
import Head from "./head"
import "./Signup.css"
import {Link} from "react-router-dom";


class Signup extends React.Component{

  constructor(props) {
    super(props);
    this.state = {fname:"",lname:"",password:"",mobile:"",email:"",address:""};
  }

  validate=(e)=>{
    console.log("validating "+e);
    if(e!==undefined && this.state[e]!==""){
      this.setState({[e]:this.state[e].trim()})
      return true
    }else{
      return false
    }
  }

  submitHandler=(e)=> {
    var keys=["fname","lname","password","mobile","email","address"]
    e.preventDefault();
    var validated=true;
    keys.map(item=>{
      // console.log(item);
       if(!this.validate(item)){
         validated=false
       }
    })
    if(this.state.mobile.length!==10){
      validated=false
    }

    if(this.state.password.length>=6){
      validated=false
    }

    if(validated){
      var signupDetails ={
        fname : this.state.fname,
        lname : this.state.lname,
        password:this.state.password,
        mobile:this.state.mobile,
        email:this.state.email,
        address:this.state.address

      };

        fetch('http://localhost:4000/signup', {
          method: 'post',
          body : JSON.stringify({
            signupDetails
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
     .then((json) => {
       console.log(json.mes);
     })
     .catch((error) => {
       console.error(error);
     });
   }else{
     console.log("Empty Fields");
   }
  }

  handleChange=(e)=>{
      var item=e.target.name
      this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    return (<>
   <div class="container pt-3" style={{width:'80%',height:'500px',marginLeft:'10%',boxShadow:'0px 0px 72px rgb(0,0,0,0.16)',backgroundColor:'white'}}>
   <form style={{marginTop:'30px'}} onSubmit={this.submitHandler}>
    <table style={{width:'40%',float:'left'}}>
        <tr><td><div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}><span style={{fontFamily:'arial',color:'#6A6666',fontWeight:'700'}}>Welcome to</span> Quick Finder</div></td></tr>
        <tr><td><div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}>Personal Information</div></td></tr>
        <tr><td><label for="firstname">First Name</label></td></tr>
        <tr><td><input type="text" class="form-control" id="mobile1" name="fname" onChange={this.handleChange}/></td></tr>
        <tr><td><label for="secname">Last Name</label></td></tr>
        <tr><td><input type="text" class="form-control" id="mobile" name="lname" onChange={this.handleChange}/></td></tr>
        <tr><td><label for="password">Password</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" name="password" onChange={this.handleChange}/></td></tr>
        <tr><td><label for="mobile">Phone Number</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" name="mobile" onChange={this.handleChange}/></td></tr>
    </table>
    <table style={{width:'40%',float:'right'}}>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td><label for="email">Email</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" name="email" onChange={this.handleChange}/></td></tr>
        <tr><td><label for="address">Address</label></td></tr>
        <tr><td><input type="mobile" class="form-control" id="mobile" name="address" onChange={this.handleChange}/></td></tr>
        <Link to="/QUICK_FINDER/login" class="btn btn-default" id="login">Login</Link>
        <tr><td><input type="submit" class="btn btn-default" value="Create Profile" id="signup"/></td></tr>
    </table>
  </form>
  </div>
</>);
  }
}
export default Signup;
