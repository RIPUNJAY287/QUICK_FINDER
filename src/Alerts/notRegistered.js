import React from 'react';
import ReactDOM from 'react-dom';
import './notRegistered.css'

class NotRegistered extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className ="notregistered">
                <p>Please register your account</p>
            </div>
        )
    }

}

export default NotRegistered;
