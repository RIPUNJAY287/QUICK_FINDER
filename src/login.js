import React from 'react';
import ReactDOM from 'react-dom';
import Dia from "./dialog"
import Box from "./diaset"
import Head from "./head"
import "./login.css"
import {Link} from "react-router-dom";
class Login extends React.Component{

  // submitHandler=(e)=>{
  //   e.preventDefault()
  //   console.log("Called");
  //   fetch("http://localhost:3005/login")
  //     .then(res => {
  //       res.json()
  //       console.log(res)})
  //     .then((result) => {
  //         console.log(result);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  // }

  render(){
    return (<>
  <div class="container" style={{padding:'0px',width:'80%',height:'500px',marginLeft:'10%',boxShadow:'0px 0px 72px rgb(0,0,0,0.16)',backgroundColor:'white'}}>
  <div class="row">
                    <div class="col-lg-8">
                    <img src={require('./loginpic.jpg')} style={{width:'100%',objectFit:'cover',height:'500px', objectPosition: "25% 10%"}} />
                    </div>
                    <div class="col-lg-4">
                    <div class="container" style={{height:'400px',marginTop:'50px'}}>
  <div style={{fontFamily:'arial',fontWeight:'600',fontSize:'20px'}}><span style={{fontFamily:'arial',color:'#6A6666',fontWeight:'700'}}>Welcome to</span> Quick Finder</div>
  <div style={{fontFamily:'arial',color:'#8E8E8E'}}>We make easy to buy in low cast.</div>

  <form style={{marginTop:'30px'}} action="http://localhost:3005/login" method="post">
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" class="form-control" name="user_name"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password</label>
    <input type="password" class="form-control" name="pass_word" />
  </div>
  <Link to="/QUICK_FINDER/signup" class="btn btn-default" id="signup">Create Profile</Link>
  <input type="submit" class="btn btn-default" value="Login" id="login"/>
  <span style={{fontSize:'15px',fontFamily:'arial'}}>Or login with</span>

  <span style={{fontSize:'13px',fontFamily:'arial',fontWeight:'800'}}> FACEBOOK</span>
  <span style={{fontSize:'13px',fontFamily:'arial',fontWeight:'800'}}> GOOGLE</span>
  </form>  
  </div>    
 
                    </div>
  </div>
                
  
  </div>    
    
    </>) ;

 }

}
export default Login;
