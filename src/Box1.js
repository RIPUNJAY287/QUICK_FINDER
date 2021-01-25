import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import { getDefaultCompilerOptions } from 'typescript';



class Box1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
                product_name:"",
                product_type:"",
                status:"",
                price:"",
                seller_name:"",
                seller_address:"",
                product_id:"",
                seller_id:""
              };
    this.getDetails();
          this.getDetails=this.getDetails.bind(this);
  }
  
  getDetails(){
        console.log("ya1");
        fetch('http://localhost:3005/getDetails', {
            method: 'post',
            body : JSON.stringify({
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then((res) => res.json())
       .then((json) => {
        console.log(this.props.comp_num);
        var i=this.props.comp_num;
        this.setState({
          product_name:json.mes[i].product_name,
          product_type:json.mes[i].product_type,
          status:json.mes[i].status,
          price:json.mes[i].price,
          product_id:json.mes[i].product_id,
          seller_name:json.mes[i].seller_name,
          seller_address:json.mes[i].seller_address,
          seller_id:json.mes[i].seller_id
          });
          console.log(this.state.product_id);
      });
          return ;  
    }
    render(){
        return (
            <>
            <div class="container m-2 p-3" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'250px',padding:'0px',backgroundColor:'white'}}> 
            <div class="row" style={{height:'100%'}}>
                <div class="col-lg-6"> 
                    <img style={{width:'100%',height:'100%'}}src="https://cdn.vox-cdn.com/thumbor/VxVwYQjX8YjyLFyBekkGbjXyyVI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19288658/DSCF7161.jpg"></img>
                </div>
                <div class="col-lg-6 pl-4 pt-3">
                   <table style={{textAlign:'center'}}>
                    <tr><td colspan='2' style={{fontWeight:'700',color:'#707070',fontSize:'20px'}}>{this.state.product_name}</td></tr>    
                    <tr><td colspan='2'  style={{fontWeight:'500',color:'#707070'}}>{this.state.product_type}</td></tr>    
                    <tr><td colspan='2'  style={{fontWeight:'400',color:'#707070'}}>{this.state.seller_id}</td></tr>    
                    <tr><td style={{fontWeight:'400',color:'#928D3D',fontWeight:'700',fontSize:'17px'}}>{this.state.price}</td><td style={{fontWeight:'400',color:'#2E7F8F',fontWeight:'600',fontSize:'17px'}}>{this.state.status}</td></tr>
                    <br />
                    <tr><td colspan ='2'><Link to="/Quick_finder/Boxopen1" class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore</Link></td></tr>    

                  </table>
                </div>
            </div>

             </div>
     
            </>
        );
    }
}
export default Box1;