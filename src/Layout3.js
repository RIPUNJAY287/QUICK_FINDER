import React from 'react';
import ReactDOM from 'react-dom'
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
class Layout3 extends React.Component{
    render(){
        return (
            <>
        <h4 style={{textAlign:'center',marginTop:'30px'}}>   Buy Vehicle And Full fill Your Dreams</h4>
            <div class="container" style={{width:'75%'}}>
            <div class="row">
  <div class="col-lg-4"><Box3 /><Box3 /></div>
  <div class="col-lg-5"><Box4 /></div>
  <div class="col-lg-3"><Box5 /><Box5 /><Box5 /></div>
 </div>
            </div>
            </>
        );
    }
}
export default Layout3;