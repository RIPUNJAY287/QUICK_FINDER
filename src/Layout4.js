import React from 'react';
import ReactDOM from 'react-dom'
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
import Box6 from './Box6';
class Layout4 extends React.Component{
    render(){
        return (
            <>
        <h4 style={{textAlign:'center',marginTop:'30px'}}>   Buy Vehicle And Full fill Your Dreams</h4>
            <div class="container" style={{width:'75%'}}>
            <div class="row">
  <div class="col-lg-4"><Box6 comp_num={11}/></div>
  <div class="col-lg-4"><Box6 comp_num={12}/></div>
  <div class="col-lg-4"><Box6 comp_num={13}/></div>
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
export default Layout4;