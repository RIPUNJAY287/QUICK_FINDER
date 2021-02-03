import React, {Component} from "react";
import './item_bar.css';
class ItemBuyBar extends Component {
  render(){
   var time = this.props.item.Time.substring(0,24);
   return (
     <div className="itembar">
      <div className="itemcompo">{this.props.item.SellerId}</div>
      <div className="itemcompo">{this.props.item.ProductId}</div>
      <div className="itemcompo">{this.props.item.Bought}</div>
      <div className="itemcompo">{time}</div>
     </div>
  )
}
}

export default ItemBuyBar;
