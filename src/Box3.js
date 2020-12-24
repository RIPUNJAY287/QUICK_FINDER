import React from 'react'
import ReactDOM from 'react-dom'
class Box3 extends React.Component{
    render(){
        return (
            <>
            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'330px',padding:'0px',backgroundColor:'white'}}> 
      
                <div class="container"> 
                    <img style={{width:'100%'}}src="https://images-na.ssl-images-amazon.com/images/I/71S4fmaVk5L._SL1500_.jpg"></img>
                </div>
                <div class="container ml-3">
                   <table style={{width:'100%'}}>
                    <tr><td style={{fontWeight:'700',color:'#3E3B3B',fontSize:'20px'}}>Philips Trimmer</td><td><button class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore</button></td></tr>    
                  </table>
                </div>
            </div>
     
            </>
        );
    }
}
export default Box3;