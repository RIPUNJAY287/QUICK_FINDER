import React from 'react'
import './messagebox.css'

class MessageBox extends React.Component{

    constructor (props){
        super(props)
        this.state={
            message:""
        }
    }

    render(){
        return(
            <div className={this.props.target}>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default MessageBox;
