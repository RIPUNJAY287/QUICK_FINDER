import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory,Link ,Redirect} from "react-router-dom";
class Box4 extends React.Component{
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
            <div class="container m-2 p-4" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'670px',padding:'0px',backgroundColor:'white'}}>
                <div>
                    <img style={{width:'100%'}}src="https://cdn.shopclues.com/images1/thumbnails/102155/320/320/147438039-102155083-1564203373.jpg"></img>
                </div>
                <div class="container mt-4">
                   <table style={{width:'100%'}}>
                    <tr><td style={{fontWeight:'700',color:'#3E3B3B',fontSize:'22px',textAlign:'center'}}>{this.state.product_name} </td>
                    <td>  <Link to ={{ pathname : "/QUICK_FINDER/Boxopen1",
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
                  class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore</Link></td></tr>
                  </table>
                </div>

             </div>

            </>
        );
    }

}
export default Box4;
