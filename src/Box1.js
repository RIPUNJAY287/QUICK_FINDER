import React from 'react'
import ReactDOM from 'react-dom'
class Box1 extends React.Component{
    render(){
        return (
            <>
            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'250px',padding:'0px',backgroundColor:'white'}}> 
            <div class="row">
                <div class="col-lg-6"> 
                    <img style={{width:'100%'}}src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg"></img>
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

             </div>
     
            </>
        );
    }
}
export default Box1;