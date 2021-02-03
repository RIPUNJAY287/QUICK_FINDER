import React, {Component} from "react";
import './chatbutton.css'
class ChatButton extends Component {

    constructor(props) {
        super(props);
        this.state = {display:false};
      }

    show=()=>{
        console.log("show");
        this.props.toggleChat();
    }

    render(){
        return (
            <div className ="DiaBox">
                <button onClick={this.show}>Chat</button>
            </div>
        )
    }
}

export default ChatButton;
