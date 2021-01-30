
import React, {Component} from "react";
import ItemBar from './item_bar'
import './item_list.css'
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
        SellerId : currentuser,
      };
      console.log(userdata);

    try{const response  = await fetch('http://localhost:5000/backend/usersellproduct',
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
  //   try{
  //     const response = await axios({
  //       method: 'post',
  //       url: 'http://localhost:5000/backend/getuserproduct',
  //       data: userdata,
  //       headers: {'Content-Type': 'application/json'}
  //     });
  //   console.log(response.data);
  //
  // }
  // catch(err){
  //   console.log(err);
  // }



  render(){

    var  sellitems = this.state.items;
    var   isLoaded = this.state.isLoaded;
    if(!isLoaded) {
      return(
          <p>Wait</p>
      )
    }
    else{
    return (
    <div className="itemlist">
    {
      this.state.items.map(function(item){
        return <ItemBar item={item}/>;
      })
    }

    </div>
      )
    }
    }

}
export default ItemList;
