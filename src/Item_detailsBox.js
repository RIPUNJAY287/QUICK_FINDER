import React, {Component} from "react";
import './Item_detailsBox.css'
import'bootstrap/dist/css/bootstrap.min.css';
import { ObjectId } from "mongodb";
import ChatButton from './ChatButton'
import {Link ,Redirect} from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";


class DetailsBox extends Component {
   constructor(props){
     super(props);
     this.buy = this.buy.bind(this);
    // this.buyrequest = this.buyrequest.bind(this);
   }

  buy(){
    var buyDetails={
      buyerID : sessionStorage.username,
      sellerID:this.props.seller_id,
      productID:this.props.product_id,
    };
    console.log("buyed");
    fetch('http://localhost:4000/buy', {
          method: 'post',
          body : JSON.stringify({
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

  /*
    buyrequest(){
          var userid = {
            productId : this.props.property.product_id,
            SellerId : this.props.property.seller_id,
            BuyerId :  sessionStorage.username
          };
          fetch('http://localhost:5000/backend/addrequests', {
                method: 'post',
                body : JSON.stringify({
                    userid
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
  */


  render(){
      console.log("in Item_detailsBox");
      console.log(this.props);
      if(!this.props.property)
      {
       return (<div>undefinded</div>); 
      }else{
      return (
     <div className ="DetailsBox">
     <img className="Details_item" src = {process.env.PUBLIC_URL+"/realme7.jpeg"} alt="got" />
     <div className = "Details_details">
     <p className="Details_pro">{this.props.property.product_id}</p>
     <p className="Details_name">{this.props.property.product_name}</p>
     <p className="Details_location">location : {this.props.property.seller_address}</p>
     <p className ="Details_disc">{this.props.status}</p>
     <div className="Details_pics">
     <img className="Details_pic" src = {process.env.PUBLIC_URL+"/realme.jpg"} alt="got" />
     <img className="Details_pic" src = {process.env.PUBLIC_URL+"/realme7.jpeg"} alt="got" />
     <img className="Details_picl" src = {process.env.PUBLIC_URL+"/realme7p.jpeg"} alt="got" />
    </div>
     <div className="Details_bottom">
     <p className="Details_pr">{this.props.property.price} </p>
     <button type="button" class="btn btn-dark btn-sm Details_purBtn" onClick={this.buy}>PURCHASE</button>
     <ChatButton toggleChat={this.props.toggleChat}/>
    </div>
    </div>
    </div>
  )}
}
}

export default DetailsBox;
