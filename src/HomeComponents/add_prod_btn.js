import React, {Component} from "react";
import './add_prod_btn.css'

class AddProduct extends Component {
  render(){
    return(
      <div className ="addsell" >
      <a className="x" href= "http://localhost:3000/QUICK_FINDER/Sell/" >Add Product</a>
     </div>
    )
  }
}

export default AddProduct;
