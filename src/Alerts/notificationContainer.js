import React from 'react';
import ReactDOM from 'react-dom';
import './notificationContainer.css'
import Notification from './notification'

class NotificationContainer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className ="notificationcontainer">
                <Notification/>
            </div>
        )
    }

}

export default NotificationContainer;
