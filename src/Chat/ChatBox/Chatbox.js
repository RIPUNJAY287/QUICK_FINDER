import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './chatbox.css'
import MessageBox from '../MessageBox/MessageBox';

let socket;
const SERVER='localhost:4000'
var prevmes=[]
var chatbox;

class ChatBox extends React.Component{

    constructor (props){
        super(props)
        this.state={
            message:"",
            receive:"",
            messages:[],
            room:"",
            id:""
        }
    }

    scrollToBottom = () => {
        const objDiv = document.getElementById('end');
        // var p=document.createElement('p')
        // p.innerText="Appended"
        // objDiv.append(p)
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    componentDidUpdate () {
        var show=this.props.display
        this.scrollToBottom()
        if(show){
            chatbox.style.display="flex"
        }else{
            chatbox.style.display="none"
        }
    }

    componentDidMount(){
        chatbox=document.getElementsByClassName('chatcontainer')[0]
        this.setState({messages:prevmes})
        if(socket===undefined){
            socket=io(SERVER, {'transports': ['websocket', 'polling']});
        }

        socket.on(`receive`,message=>{
            this.scrollToBottom()
            this.setState({receive:message})
            this.setState(prevState => ({
                messages: [...prevState.messages, {"message":message,target:"receiver"}]
            }));
            // const objDiv = document.getElementById('end');
            // var pdiv=document.createElement('div')
            // pdiv.className='receiver'
            // var p=document.createElement('p')
            // p.innerText=message
            // pdiv.append(p)
            // objDiv.append(pdiv)
        })

        socket.on('allmessages',allmes=>{
            var id=this.state.id
            for(var i in allmes){
                this.setState(prevState => ({
                    messages: [...prevState.messages, {"message":allmes[i].message,
                                        target:id!==allmes[i].id?"receiver":"sender"}]
                }));
            }
        })
    }

    componentWillUnmount(){
        prevmes=this.state.messages
    }

    sendMessage=()=>{
        this.scrollToBottom()
        socket.emit(`sent-message`,{"data":
                                    {"message":this.state.message,
                                    "room":this.state.room,
                                    "id":this.state.id}})
        this.setState(prevState => ({
            messages: [...prevState.messages, {"message":this.state.message,target:"sender"}]
        }));
        // const objDiv = document.getElementById('end');
        // var pdiv=document.createElement('div')
        // pdiv.className='sender'
        // var p=document.createElement('p')
        // p.innerText=this.state.message
        // pdiv.append(p)
        // objDiv.append(pdiv)
    }

    handleChange=(e)=>{
        this.setState({message:e.target.value})
    }

    roomHandler=(e)=>{
        this.setState({room:e.target.value})
    }

    fixRoom=()=>{
        socket.emit(`join`,this.state.room)
    }

    idHandler=(e)=>{
        this.setState({id:e.target.value})
    }

    hideChat=()=>{
        console.log(chatbox.style.display);
        if(chatbox.style.display==="flex"){
            chatbox.style.display="none"
        }
    }

    render(){
        return(
            <div className="chatcontainer">
                <div className="closechat" onClick={this.hideChat}>
                    <p>X</p>
                </div>
                <div className="mescontainer" id="end">
                    {this.state.messages.map(item => (
                        <MessageBox message={item.message} target={item.target}/>
                    ))}
                </div>
                <div className="formcontainer">
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit" value="Send" onClick={this.sendMessage}/>
                </div>
                <div>
                    <input type="text" onChange={this.roomHandler}/>
                    <input type="submit" value="Join" onClick={this.fixRoom}/>
                </div>
                <div>
                    <input type="text" onChange={this.idHandler}/>
                </div>
            </div>
        )
    }
}

export default ChatBox;
