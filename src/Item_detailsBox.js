import React, {Component} from "react";
import './Item_detailsBox.css'
import'bootstrap/dist/css/bootstrap.min.css';
class DetailsBox extends Component {
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
     <button type="button" class="btn btn-dark btn-sm Details_purBtn">PURCHASE</button>
    </div>
    </div>
    </div>
  )
}
}

export default DetailsBox;
