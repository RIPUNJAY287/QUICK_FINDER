import React from 'react';
import ReactDOM from 'react-dom'
import Box1 from './Box1';
import Box2 from './Box2';
class Layout2 extends React.Component{
    render(){
        return (
            <>
        <h4 style={{textAlign:'center',marginTop:'80px'}}>   Buy Vehicle And Full fill Your Dreams</h4>
            <div class="container" style={{width:'75%'}}>
            <div class="row">
  <div class="col-lg-6"><Box2 comp_num={3}/></div>
  <div class="col-lg-6"><Box1 comp_num={4}/><Box1 comp_num={5}/></div>

 </div>
            </div>
            <div class="container">
                   <table style={{width:'100%'}}>
                    <tr><td style={{textAlign:'center'}}><button class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>See More</button></td></tr>    
                  </table>
            </div>

            </>
        );
    }
}
export default Layout2;