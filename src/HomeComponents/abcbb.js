import React, {Component} from "react";
import NavBar from './nav_bar'
import ItemList from './item_list'
import AddProduct from './add_prod_btn'
import './abcb.css'

class ABCB extends Component {

  render(){
    return(
        <div>
          <p className="sub">All Buys</p>
          <div className="containerabcd">
            <ItemList type = {"buy"}/>
          </div>
        </div>
    )
  }
}

export default ABCB;
