import React, {Component} from "react";
import NavCompo from './nav_compo'
import './nav_bar.css'

class NavBar extends Component {


render(){
  const items = ["Home","Sell","Setting","About Us","Account"]
  return (
      <div className="nbar">
          {
            items.map(function(name, index){
              return <NavCompo navItem={name}/>;
            })
          }
      </div>
    )
  }
}

export default NavBar;
