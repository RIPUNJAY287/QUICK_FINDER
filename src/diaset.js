import React,{Component} from "react";
import Dia from "./dialog"
import DetailsBox from "./Item_detailsBox"
import MiniBox from "./miniBox"
class Box extends Component{
  render(){
    return(
      <div className ="mai">
      <DetailsBox className="Spec" product="REALME 7 pro Mobile Phone" name="Rakesh Wardhawana" address="kandra nagar,Mumbai"
      price = "$2599" disc="This phone have 4gb RAM with 64 internal Storage Memory, It's Processor is awesome i.e., snapdragron 720 with 9mm. Rear camera with 64mp."/>
     <MiniBox className="mini" product="Apple HandWatch"/>
     <MiniBox className="mini" product="Apple HandWatch"/>
     <MiniBox className="mini" product="Apple HandWatch"/>
     <Dia product="Iphone 11 max Pro" name="Jenny alferd" location="LA ,New york" price="$4356" year="2 yrs"/>
    </div>
    );
  }
}

export default Box;