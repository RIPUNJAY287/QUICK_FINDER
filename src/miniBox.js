import React, {Component} from "react";
import './miniBox.css'
import'bootstrap/dist/css/bootstrap.min.css';
class MiniBox extends Component {
  render(){
   return (
     <div className ="minibox">
     <img className="mini_item" src = {process.env.PUBLIC_URL+"/realme7.jpeg"} alt="got" />
     <div className = "mini_details">
     <p class="mini_pro">{this.props.product}</p>
     <button type="button" class="btn btn-dark btn-sm  mini_expBtn">EXPLORE</button>
    </div>
    </div>
  )
}
}

export default MiniBox;
