import React from 'react'
import ReactDOM from 'react-dom'
class Box1 extends React.Component{
    render(){
        return (
            <>
            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'500px',backgroundColor:'white'}}> 
            <img style={{width:'100%'}} src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg" /> 
           </div>
            </>
        );
    }
}
export default Box1;