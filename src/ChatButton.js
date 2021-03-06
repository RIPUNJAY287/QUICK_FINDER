import React, {Component} from "react";
import './chatbutton.css'
class ChatButton extends Component {

    constructor(props) {
        super(props);
        this.state = {display:false};
      }

    show=()=>{
        console.log("show");
        // this.props.toggleChat();
        console.log(this.props);
    }

    render(){
        return (
            <div className ="DiaBox">
                <button onClick={this.show}>Chat With Seller</button>
            </div>
        )
    }
}

export default ChatButton;
