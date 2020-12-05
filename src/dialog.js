import React, {Component} from "react";
import './dialog.css'
import'bootstrap/dist/css/bootstrap.min.css';
class Dia extends Component {
  render(){
   return (
     <div className ="DiaBox">
     <img className="Dia_item" src = {process.env.PUBLIC_URL+"/realme.jpg"} alt="got" />
     <div className = "Dia_details">
     <p className="Dia_pro">{this.props.product}</p>
     <p className="Dia_p">{this.props.name}</p>
     <p className="Dia_p">{this.props.location}</p>
     <p className="Dia_pr">{this.props.price}</p>
      <p className="Dia_yr">{this.props.year}</p>
     <button type="button" class="btn btn-dark btn-sm Dia_expBtn">EXPLORE</button>
    </div>
    </div>
  )
}
}

export default Dia;
