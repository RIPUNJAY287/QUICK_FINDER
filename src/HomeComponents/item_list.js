
import React, {Component} from "react";
import  ItemBuyBar from './itembuy_bar';
import ItemSellBar from './itemsell_bar';
import './item_list.css';
import axios from 'axios';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
               items:null,
               isLoaded : false
              };
  }
 async componentDidMount(){
      var currentuser  = sessionStorage.getItem("username");
      console.log("cuurent user: "+currentuser);
      if(currentuser != null){
      var userdata  = {
        Id : currentuser,
      };
      console.log(userdata);
     var type = this.props.type;
     var pattern = "user"+type+"product";
     var url = 'http://localhost:5000/backend/'+pattern;
      console.log(url);
    try{
      const response  = await fetch(url,
                 { method: 'post',
                   body : JSON.stringify({userdata}),
                  headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                   }
                 });

    const data = await response.json();
    this.setState({
      items : data,
      isLoaded :true
    });
     console.log(this.state);
     console.log(data);
    }
    catch(err){
      console.log(err);
    }
  }
}


  render(){

    var  sellitems = this.state.items;
    var   isLoaded = this.state.isLoaded;
    console.log(this.props.type);
    if(!isLoaded) {
      return(
          <p className="wait">Wait.....</p>
      )
    }
    else if(this.props.type == "sell"){
    return (
    <div className="itemlist">
    {
      this.state.items.map(function(item){
        return <ItemSellBar item={item}/>;
      })
    }

    </div>
      )
    }
    else {
    return (
    <div className="itemlist">
    {
      this.state.items.map(function(item){
        return <ItemBuyBar item={item}/>;
      })
    }

    </div>
      )
    }

    }

}
export default ItemList;
