import React from 'react';
import ReactDOM from 'react-dom';
import './notification.css'

class Notification extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className ="notification">
                <p>{this.props.buyer}</p>
                <p>{this.props.count}</p>
            </div>
        )
    }

}

export default Notification;
