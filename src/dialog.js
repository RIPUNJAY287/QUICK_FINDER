import React, {Component} from "react";
import './dialog.css'
//let dia  = <div> <h1>Ripunjay kumar </h1> </div>
class Dia extends Component {
  render(){
   return (
     <div className ="he">
     <img className="profile" src = {process.env.PUBLIC_URL+"/gott.jpg"} alt="got" />
     <p>{this.props.name} </p>
     <p className="prof">{this.props.prof}</p>
     <img className="star" src = {process.env.PUBLIC_URL+"/star.png"} alt="got" />
     <img className="star" src = {process.env.PUBLIC_URL+"/star.png"} alt="got" />
     <img className="star" src = {process.env.PUBLIC_URL+"/star.png"} alt="got" />
     <img className="star" src = {process.env.PUBLIC_URL+"/star.png"} alt="got" />
     <img className="star" src = {process.env.PUBLIC_URL+"/star.png"} alt="got" />

    </div>
  )
}
}

export default Dia;
