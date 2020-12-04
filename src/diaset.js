import React,{Component} from "react";
import Dia from "./dialog"
import "./dialog.css"
class Box extends Component{
  render(){
    return(
      <div>
      <Dia className="box" name ="Rahul kumar" prof="Electrician"/>
      <Dia className="box" name ="Rahul kumar" prof="Electrician"/>
      <Dia className="box" name ="Rahul kumar" prof="Electrician"/>
     </div>
    );
  }
}

export default Box;
