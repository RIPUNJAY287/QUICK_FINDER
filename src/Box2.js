import React from 'react'
import ReactDOM from 'react-dom';
import {browserHistory,Link ,Redirect} from "react-router-dom";
class Box1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

      product_name:"",
      product_images:"",
      product_type:"",
      status:"",
      price:"",
      seller_name:"",
      seller_address:"",
      product_id:"",
      seller_id:"",
      description:"",
      search_input:""
    };
    
 }

  static getDerivedStateFromProps(props,state){
    return {
        product_name:props.product_name,
        description:props.description,
        product_images:props.product_images,
        product_type:props.product_type,
        status:props.status,
        price:props.price,
        product_id:props.product_id,
        seller_name:props.seller_name,
        seller_address:props.seller_address,
        seller_id:props.seller_id,
        search_input:props.search_input}
    }

    render(){
      if(this.state.product_name=="")
      {
        return (
          <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'508px',backgroundColor:'white'}}> 
          <div class="spinner-border text-muted" style={{width:"5rem",height:"5rem",marginLeft:"45%",marginTop:"45%"}}></div>
          </div>
        );
      }else{  
      return (
             <>

            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'508px',backgroundColor:'white'}}> 
            <img style={{width:'100%'}} src={process.env.PUBLIC_URL+"/uploadpics/sellproducts/"+this.state.product_images} /> 

            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 p-4" >
                   <table style={{textAlign:'center'}}>
                    <tr><td colspan='2' style={{fontWeight:'700',color:'#707070',fontSize:'20px'}}>{this.state.product_name}</td></tr>
                    <tr><td colspan='2'  style={{fontWeight:'500',color:'#707070'}}>{this.state.product_type}</td></tr>
                    <tr><td colspan='2'  style={{fontWeight:'400',color:'#707070'}}>{this.state.seller_id}</td></tr>
                    <tr><td style={{fontWeight:'400',color:'#928D3D',fontWeight:'700',fontSize:'17px'}}>{this.state.price}</td><td style={{fontWeight:'400',color:'#2E7F8F',fontWeight:'600',fontSize:'17px'}}>{this.state.status}</td></tr>
                    <br />
                    <tr><td colspan ='2'>  <Link to ={{ pathname : "/QUICK_FINDER/Boxopen1",
                                                    state:{
                                                    product_name:this.state.product_name,
                                                    product_type:this.state.product_type,
                                                    status:this.state.status,
                                                    price:this.state.price,
                                                    product_id:this.state.product_id,
                                                    seller_name:this.state.seller_name,
                                                    seller_address:this.state.seller_address,
                                                    seller_id:this.state.seller_id,
                                                    product_images: this.props.product_images
                                                }
                                           }}
                    class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore</Link></td></tr>

                  </table>
                </div>
                           <div class="col-lg-6 col-md-12 col-sm-12 p-4">
                <h5 style={{textAlign:'center',color:'#3B3E3E'}}>Description</h5>
                <div class="container" style={{textAlign:'center',color:'#3B3E3E',fontSize:'14px'}}>{this.state.description}</div>
                </div>
     
            </div>

           </div>
            </>
        );
      }
  }

}
export default Box1;
