import React, { Component } from "react";
import './Item_detailsBox.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ObjectId } from "mongodb";
import ChatButton from './ChatButton'
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import ChatBox from "./Chat/ChatBox/Chatbox";


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
      "product_image":""
    }
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
        "product_image":this.props.property.product_images,
      })
    }
  }

  buy = () => {
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


  render() {
    return (
      <div className="DetailsBox" id={this.state.seller_id}>
        <ChatBox/>
        <img className="Details_item" src={process.env.PUBLIC_URL + "/realme7.jpeg"} alt="got" />
        <div className="Details_details">
          <p className="Details_pro">{this.state.product_id}</p>
          <p className="Details_name">{this.state.product_name}</p>
          <p className="Details_location">location : {this.state.seller_address}</p>
          <p className="Details_disc">{this.state.status}</p>
          <div className="Details_pics">
            <img className="Details_pic" src={"/QUICK_FINDER/uploadpics/sellproducts/"+this.state.product_image} alt="got" />
            {/* <img className="Details_pic" src={process.env.PUBLIC_URL + "/realme7.jpeg"} alt="got" />
            <img className="Details_picl" src={process.env.PUBLIC_URL + "/realme7p.jpeg"} alt="got" /> */}
          </div>
          <div className="Details_bottom">
            <p className="Details_pr">{this.state.price} </p>
            <button type="button" class="btn btn-dark btn-sm Details_purBtn" onClick={this.buy}>PURCHASE</button>
            {/* <ChatButton toggleChat={this.props.property.toggleChat}/> */}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsBox;
