import React from "react"
import ReactDOM from "react-dom"
import Item_detailsBox from "./Item_detailsBox"
import MiniBox from "./miniBox"
import Box5 from "./Box5"
import Box1 from "./Box1"
import ChatBox from '../src/Chat/ChatBox/Chatbox'
import { withRouter } from "react-router";



class Main extends React.Component{

    constructor(props){
        super(props)
        this.state={
            showchat:false
        }
    }

    toggleChat=()=>{
        var chatbox=document.getElementsByClassName('chatcontainer')[0]
        if(chatbox.style.display==='flex'){
            this.setState({showchat:false})
        }else{
            this.setState({showchat:true})
        }
    }

    render(){

        const { match, location, history } = this.props;
        console.log(location);
        console.log(this.props);
        return (
        <>
            <div class="container" style={{width:'100%'}}>
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12"><Item_detailsBox property = {this.props.location.state} toggleChat={this.toggleChat}/></div>
                    <div class="col-lg-3 col-md-3 col-sm-3"><MiniBox /><MiniBox /></div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-4"><Box5 /></div>
                    <div class="col-lg-3 col-md-4 col-sm-4"><Box5 /></div>
                    <div class="col-lg-3 col-md-4 col-sm-4"><Box5 /></div>
                    <div class="col-lg-3 col-md-4 col-sm-4"><Box5 /></div>

                </div>
                <ChatBox display={this.state.showchat}/>
            </div>
        </>
            );
    }
}
export default Main;
