import React, {Component} from "react";
import './dialog.css'
import'bootstrap/dist/css/bootstrap.min.css';
class Dia extends Component {
  render(){
   return (
     <div className ="diaHead">
     <img className="item" src = {process.env.PUBLIC_URL+"/realme.jpg"} alt="got" />
     <div className = "details">
     <p className="pro">{this.props.item}</p>
     <p>{this.props.name}</p>
     <p>{this.props.address}</p>
     <p><span className="pr">{this.props.price}</span> <span className="yr">{this.props.year}</span></p>
     <button type="button" class="btn btn-dark btn-sm">EXPLORE</button>
    </div>
    </div>
  )
}
}

export default Dia;
