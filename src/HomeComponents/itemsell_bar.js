import React, {Component} from "react";
import './item_bar.css';
class ItemSellBar extends Component {
  render(){
   var time = this.props.item.Time.substring(0,24);
   return (
     <div className="itembar">
      <div className="itemcompo">{this.props.item.BuyerId}</div>
      <div className="itemcompo">{this.props.item.ProductId}</div>
      <div className="itemcompo">{this.props.item.Sold}</div>
      <div className="itemcompo">{time}</div>
     </div>
  )
}
}

export default ItemSellBar;
