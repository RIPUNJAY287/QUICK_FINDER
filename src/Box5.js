import React from 'react'
import ReactDOM from 'react-dom'
class Box5 extends React.Component{
    render(){
        return (
            <>
            <div class="container m-2 p-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'220px',padding:'0px',backgroundColor:'white'}}> 
                <div class="container p-2" style={{width:'150px'}}> 
                    <img style={{width:'100%'}}src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTPL2_VW_34FR+watch-44-alum-spacegray-cell-6s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1566419577479,1599519901000"></img>
                </div>
                <div class="container">
                   <table style={{width:'100%'}}>
                    <tr><td style={{fontWeight:'700',color:'#3E3B3B'}}>Apple Watch</td><td><button class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore</button></td></tr>    
                  </table>
                </div>
            </div>
     
            </>
        );
    }
}
export default Box5;