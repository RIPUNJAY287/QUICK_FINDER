import React, {Component} from "react";
import './item_bar.css'
class ItemBar extends Component {
  render(){
   return (
     <div className="itembar">
      <div className="itemcompo">{this.props.item[0]}</div>
      <div className="itemcompo">{this.props.item[1]}</div>
      <div className="itemcompo">{this.props.item[2]}</div>
      <div className="itemcompo">{this.props.item[3]}</div>
      <div className="itemcompo">{this.props.item[4]}</div>
    </div>
  )
}
}

export default ItemBar;
