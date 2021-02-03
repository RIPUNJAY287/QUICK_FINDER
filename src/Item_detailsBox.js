import React, {Component} from "react";
import './Item_detailsBox.css'
import'bootstrap/dist/css/bootstrap.min.css';
import { ObjectId } from "mongodb";
import ChatButton from './ChatButton'

class DetailsBox extends Component {

  buy=(e)=>{
    console.log(this.props);
    var buyDetails={
      buyerID:sessionStorage.getItem("username"),
      sellerID:"213",
      productID:"54454fyfh54hjk",
      DateTime:new Date()
    }
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

  render(){
   return (
     <div className ="DetailsBox">
     <img className="Details_item" src = {process.env.PUBLIC_URL+"/realme7.jpeg"} alt="got" />
     <div className = "Details_details">
     <p className="Details_pro">{this.props.product}</p>
     <p className="Details_name">Realme 5 Mobile Phone  {this.props.name}</p>
     <p className="Details_location">location : {this.props.address}</p>
     <p className ="Details_disc">{this.props.disc}</p>
     <div className="Details_pics">
     <img className="Details_pic" src = {process.env.PUBLIC_URL+"/realme.jpg"} alt="got" />
     <img className="Details_pic" src = {process.env.PUBLIC_URL+"/realme7.jpeg"} alt="got" />
     <img className="Details_picl" src = {process.env.PUBLIC_URL+"/realme7p.jpeg"} alt="got" />
    </div>
     <div className="Details_bottom">
     <p className="Details_pr">{this.props.price} </p>
     <button type="button" class="btn btn-dark btn-sm Details_purBtn" onClick={this.buy}>PURCHASE</button>
     <ChatButton toggleChat={this.props.toggleChat}/>
    </div>
    </div>
    </div>
  )
}
}

export default DetailsBox;
