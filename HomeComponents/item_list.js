import React, {Component} from "react";
import ItemBar from './item_bar'
import './item_list.css'

class ItemList extends Component {

  render(){
    const items=[
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"],
      ["dfg","Dfgd","dfgd","dfgdg","dfgdg"]
    ]
    return (
        <div className="itemlist">
            {
              items.map(function(name, index){
                return <ItemBar item={name}/>;
              })
            }
        </div>
      )
    }
  }

export default ItemList;
