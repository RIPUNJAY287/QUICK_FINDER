import React from 'react'
import ReactDOM from 'react-dom';
class Box1 extends React.Component{
    render(){
        return (
            <>
            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'500px',backgroundColor:'white'}}> 
            <img style={{width:'100%'}} src="https://fdn.gsmarena.com/imgroot/news/20/03/realme-6-6i-c3-in-europe/-476x249w4/gsmarena_000.jpg" /> 
            <div class="row">
                <div class="col-lg-6 pt-3">
                <h5 style={{textAlign:'center',color:'#3B3E3E'}}>Discription</h5>
                <div class="container" style={{textAlign:'center',color:'#3B3E3E',fontSize:'14px'}}>I have used this mobile phone only for 10 month and now I am going to buy new mobile phone that is why I want to sell this phone. Interested people can contact me any time.</div>
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