import React from 'react'
import ReactDOM from 'react-dom'
class Box4 extends React.Component{
    render(){
        return (
            <>
            <div class="container m-2 p-4" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'670px',padding:'0px',backgroundColor:'white'}}> 
                <div> 
                    <img style={{width:'100%'}}src="https://cdn.shopclues.com/images1/thumbnails/102155/320/320/147438039-102155083-1564203373.jpg"></img>
                </div>
                <div class="container mt-4">
                   <table style={{width:'100%'}}>
                    <tr><td style={{fontWeight:'700',color:'#3E3B3B',fontSize:'22px',textAlign:'center'}}>Philips Hair Dryer</td></tr>    
                  </table>
                </div>
           
             </div>
     
            </>
        );
    }
}
export default Box4;