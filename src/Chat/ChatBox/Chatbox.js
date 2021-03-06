import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './chatbox.css'
import MessageBox from '../MessageBox/MessageBox';

let socket;
const SERVER = 'localhost:4000'
var prevmes = []
var userid = sessionStorage.getItem("username")
console.log(userid);
var sellerid
var room

class ChatBox extends React.Component {

    constructor(props) {
        console.log("const");
        super(props)
        sellerid = this.props.sellerid
        // if (userid !== null && sellerid !== null) {
        //     room=userid.substring(0, userid.length / 2) +
        //         "_" + sellerid.substring(0, sellerid.length / 2)
        // }else{
        //     console.log("NULL");
        // }
        this.state = {
            message: "",
            receive: "",
            messages: [],
            id: "",
            notification:[]
        }
    }

    scrollToBottom = () => {
        const objDiv = document.getElementById('end');
        // var p=document.createElement('p')
        // p.innerText="Appended"
        // objDiv.append(p)
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    componentDidUpdate() {
        var show = this.props.display
        this.scrollToBottom()
    }

    componentDidMount() {
        console.log(this.props.socket);

        console.log("mount");
        console.log(userid);
        console.log(sellerid);
        console.log(this.state.room);

        this.setState({ messages: prevmes })
        if (socket === undefined) {
            socket = io(SERVER, { 'transports': ['websocket', 'polling'] });
        }
        if(room!==""){
            socket.emit(`join`,room)
        }
        socket.on('check',data=>{
            console.log(data);
            if(data.length!==0){
                this.setState({
                    notification:data
                })
            }
        })

        socket.on(`receive`, message => {
            console.log("received");
            this.scrollToBottom()
            this.setState({ receive: message })
            this.setState(prevState => ({
                messages: [...prevState.messages, { "message": message, target: "receiver" }]
            }));

            // socket.emit('seen',{"room":room,"id":this.state.id})

            // const objDiv = document.getElementById('end');
            // var pdiv=document.createElement('div')
            // pdiv.className='receiver'
            // var p=document.createElement('p')
            // p.innerText=message
            // pdiv.append(p)
            // objDiv.append(pdiv)
        })

        socket.on('allmessages', allmes => {
            var id = this.state.id
            for (var i in allmes) {
                this.setState(prevState => ({
                    messages: [...prevState.messages, {
                        "message": allmes[i].message,
                        target: id !== allmes[i].id ? "receiver" : "sender"
                    }]
                }));
            }
        })
    }

    componentWillUnmount() {
        prevmes = this.state.messages
    }

    sendMessage = () => {
        this.scrollToBottom()
        socket.emit(`sent-message`, {
            "data":
            {
                "message": this.state.message,
                "room": room,
                "id": this.state.id
            }
        })
        this.setState(prevState => ({
            messages: [...prevState.messages, { "message": this.state.message, target: "sender" }]
        }));
        // const objDiv = document.getElementById('end');
        // var pdiv=document.createElement('div')
        // pdiv.className='sender'
        // var p=document.createElement('p')
        // p.innerText=this.state.message
        // pdiv.append(p)
        // objDiv.append(pdiv)
    }

    handleChange = (e) => {
        this.setState({ message: e.target.value })
    }

    roomHandler = (e) => {
        room= e.target.value
    }

    fixRoom = () => {
        console.log(this.state.sellerid);
        socket.emit(`join`,room)
        // socket.emit('seen',{"room":room,"id":this.state.id})
        socket.emit('notifications',{"room":room,"id":this.state.id})
    }

    idHandler = (e) => {
        this.setState({id:e.target.value})
    }

    hideChat = () => {
        // console.log(chatbox.style.display);
        // if (chatbox.style.display === "flex") {
        //     chatbox.style.display = "none"
        // }
    }

    render() {
        return (
            <div className="chatcontainer">
                <div className="closechat" onClick={this.hideChat}>
                    <p>X</p>
                </div>
                <div className="mescontainer" id="end">
                    {this.state.messages.map(item => (
                        <MessageBox message={item.message} target={item.target} />
                    ))}
                </div>
                <div className="formcontainer">
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" value="Send" onClick={this.sendMessage} />
                </div>
                <div>
                    <input type="text" onChange={this.roomHandler} />
                    <input type="submit" value="Join" onClick={this.fixRoom} />
                </div>
                <div>
                    <input type="text" onChange={this.idHandler} />
                </div>
            </div>
        )
    }
}

export default ChatBox;
