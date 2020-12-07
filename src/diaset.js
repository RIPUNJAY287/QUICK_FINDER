import React,{Component} from "react";
import Dia from "./dialog"
import "./dialog.css"
class Box extends Component{
  render(){
    return(
      <div>
      <Dia className="box" item="REALME" name="Rohit Sharma" address="Block naggar" price="$4000" year=" 5yrs"/>
     </div>
    );
  }
}

export default Box;
