import React, { Component } from "react";
import './Item_detailsBox.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ObjectId } from "mongodb";
import ChatButton from './ChatButton'
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";


class DetailsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      "price":"" ,
      "product_id": "",
      "product_name": "",
      "product_type": "",
      "seller_address": "",
      "seller_id": "",
      "seller_name": "",
      "status": "",
      "product_image":"",
      "description":""
    }
    // this.state={
    //   "description":"I have used this mobile phone for 10 month and now i am going to buy new Mobile phone thats why i want to sell this phone",
    //   "price": "50000",
    //   "product_id": "5655df4sf45sdf475ds4f5s4df",
    //   "product_name": "RealMe5",
    //   "product_type": "Mobile phone",
    //   "seller_address": "Jalandhar, - 144701, Punjab, India",
    //   "seller_id": "d54sf5d4f5s4d5f4s5d4f54",
    //   "seller_name":"Ankit kumar",
    //   "status":"2years",
    //   "product_image":"cam1.jpg_1611440609709.jpg",
    // }
  }

  componentDidUpdate() {
    
  }

  componentDidMount(){
    console.log("mounted");
    if (this.props.property !== undefined) {
      console.log(this.props.property);
      this.setState({
        "price": this.props.property.price,
        "product_id": this.props.property.product_id,
        "product_name": this.props.property.product_name,
        "product_type": this.props.property.product_type,
        "seller_address": this.props.property.seller_address,
        "seller_id": this.props.property.seller_id,
        "seller_name": this.props.property.seller_name,
        "status": this.props.property.status,
         "description":this.props.property.description,
        "product_image":this.props.property.product_images,
      })
      // this.setState({
      //   "price": "50000",
      //   "product_id": "5655df4sf45sdf475ds4f5s4df",
      //   "product_name": "RealMe5",
      //   "product_type": "Mobile phone",
      //   "seller_address": "Jalandhar, - 144701, Punjab, India",
      //   "seller_id": "d54sf5d4f5s4d5f4s5d4f54",
      //   "seller_name":"Ankit kumar",
      //   "status":"2years",
      //   "product_image":"cam.jpg_1611433836065.jpg",
      // })
      
    }
  }

  buy = () => {
    if(!sessionStorage.username)
    {
      alert("Sign In First");
    }else{
    var buyDetails = {
      buyerID: sessionStorage.username,
      sellerID: this.state.seller_id,
      productID: this.state.product_id,
    };
    console.log("buyed");
    fetch('http://localhost:4000/buy', {
      method: 'post',
      body: JSON.stringify({
        buyDetails
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
  }
  }

  render() {
    return (
      <div className="DetailsBox" id={this.state.product_id}>
        <img className="Details_item" src={"/QUICK_FINDER/uploadpics/sellproducts/"+this.state.product_image} alt="got" />
        <div className="Details_details">
          <div style={{fontFamily:"arial",fontSize:"27px",fontWeight:"700",color:"#454547"}}>{this.state.product_name}</div>
          <div style={{fontFamily:"arial",fontSize:"15px",color:"#C7C9C7"}}>{this.state.seller_name}</div>
          <div style={{fontFamily:"arial",fontSize:"15px",color:"#C7C9C7"}}>{this.state.seller_address}</div>
          <div style={{fontFamily:"arial",fontSize:"11px",color:"#8D928D"}}>{this.state.description}</div> 
          
          {/* <p className="Details_pro">{this.state.product_id}</p>
          <p className="Details_name">{this.state.product_name}</p>
          <p className="Details_location">location : {this.state.seller_address}</p>
          <p className="Details_disc">{this.state.status}</p> */}
          <div className="Details_pics">
            {/* <img className="Details_pic" src={process.env.PUBLIC_URL + "/realme7.jpeg"} alt="got" />
            <img className="Details_picl" src={process.env.PUBLIC_URL + "/realme7p.jpeg"} alt="got" /> */}
            <img className="Details_pic" src={"/QUICK_FINDER/uploadpics/sellproducts/"+this.state.product_image} alt="got" />
            <img className="Details_pic" src={"/QUICK_FINDER/uploadpics/sellproducts/"+this.state.product_image} alt="got" />
            <img className="Details_pic" src={"/QUICK_FINDER/uploadpics/sellproducts/"+this.state.product_image} alt="got" />
          </div>
            <p className="Details_pr"> {this.state.price} Rs</p>
            <button type="button" class="btn btn-dark btn-sm Details_purBtn" onClick={this.buy}>PURCHASE</button>
            <ChatButton toggleChat={this.props.toggleChat} />
        </div>
      </div>
    )
  }
}

export default DetailsBox;
