import React from 'react'
import ReactDOM from 'react-dom'
class Box4 extends React.Component{
    render(){
        return (
            <>
            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'670px',padding:'0px',backgroundColor:'white'}}> 
                <div> 
                    <img style={{width:'100%'}}src="https://cdn.shopclues.com/images1/thumbnails/102155/320/320/147438039-102155083-1564203373.jpg"></img>
                </div>
                <div class="col-lg-6">
                   <table>
                    <tr><td>Maruti Suzuiki</td></tr>    
                    <tr><td>Mohini Sharma</td></tr>    
                    <tr><td>Shanti Nagar Banda</td></tr>    
                    <tr><td>$5000 </td></tr>
                  </table>
                </div>
           
             </div>
     
            </>
        );
    }
}
export default Box4;