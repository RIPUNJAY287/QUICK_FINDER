import React from 'react'
import ReactDOM from 'react-dom'
class Box1 extends React.Component{
    render(){
        return (
            <>
            <div class="container m-2 p-3" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'250px',padding:'0px',backgroundColor:'white'}}> 
            <div class="row" style={{height:'100%'}}>
                <div class="col-lg-6"> 
                    <img style={{width:'100%',height:'100%'}}src="https://cdn.vox-cdn.com/thumbor/VxVwYQjX8YjyLFyBekkGbjXyyVI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19288658/DSCF7161.jpg"></img>
                </div>
                <div class="col-lg-6 pl-4 pt-3">
                   <table style={{textAlign:'center'}}>
                    <tr><td colspan='2' style={{fontWeight:'700',color:'#707070',fontSize:'20px'}}>Realme 5</td></tr>    
                    <tr><td colspan='2'  style={{fontWeight:'500',color:'#707070'}}>Mohini Sharma</td></tr>    
                    <tr><td colspan='2'  style={{fontWeight:'400',color:'#707070'}}>Shanti Nagar Banda</td></tr>    
                    <tr><td style={{fontWeight:'400',color:'#928D3D',fontWeight:'700',fontSize:'17px'}}>$5000</td><td style={{fontWeight:'400',color:'#2E7F8F',fontWeight:'600',fontSize:'17px'}}>2 Yrs.</td></tr>
                    <br />
                    <tr><td colspan ='2'><button class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore</button></td></tr>    

                  </table>
                </div>
            </div>

             </div>
     
            </>
        );
    }
}
export default Box1;