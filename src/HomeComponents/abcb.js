import React, {Component} from "react";
import NavBar from './nav_bar'
import ItemList from './item_list'
import AddProduct from './add_prod_btn'
import './abcb.css'

class ABCB extends Component {

  render(){
    return(
        <div>
          <div className="container">
            <h6 className="sub">All Sells</h6>
            <ItemList/>
            <AddProduct/>
          </div>
        </div>
    )
  }
}

export default ABCB;
