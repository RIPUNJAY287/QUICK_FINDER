import React, {Component} from "react";
import './nav_compo.css'
class NavCompo extends Component {
  render(){
   return (
     <div className="navcompo">{this.props.navItem}</div>
  )
}
}

export default NavCompo;
