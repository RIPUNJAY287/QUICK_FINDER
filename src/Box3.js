import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory,Link ,Redirect} from "react-router-dom";

class Box3 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
                product_name:"Loading.....",
                product_type:"Loading.....",
                status:"Loading..",
                price:"Loading..",
                seller_name:"",
                seller_address:"",
                product_id:"",
                seller_id:"Loading..",
                description:"Loading..",
                search_input:""
              };

            }
  static getDerivedStateFromProps(props,state){
    return {
        product_name:props.product_name,
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


        return (
            <>
            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'330px',padding:'0px',backgroundColor:'white'}}>

                <div class="container">
                    <img style={{width:'100%'}}src="https://images-na.ssl-images-amazon.com/images/I/71S4fmaVk5L._SL1500_.jpg"></img>
                </div>
                <div class="container ml-3">
                   <table style={{width:'100%'}}>
                    <tr><td style={{fontWeight:'700',color:'#3E3B3B',fontSize:'20px'}}>{this.state.product_name}</td>
                    <td> <Link to ={{ pathname : "/QUICK_FINDER/Boxopen1",
                                                    state:{
                                                    product_name:this.state.product_name,
                                                    product_type:this.state.product_type,
                                                    status:this.state.status,
                                                    price:this.state.price,
                                                    product_id:this.state.product_id,
                                                    seller_name:this.state.seller_name,
                                                    seller_address:this.state.seller_address,
                                                    seller_id:this.state.seller_id
                                                }
                                           }}
                   class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore </Link></td></tr>
                  </table>
                </div>
            </div>

            </>
        );
    }

}
export default Box3;
