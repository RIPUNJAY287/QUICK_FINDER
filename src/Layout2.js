import React from 'react';
import ReactDOM from 'react-dom'
import Box1 from './Box1';
import Box2 from './Box2';
class Layout2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                    getting:[],
                    search_input:"",
                    i:0
    
                };
        }
    static getDerivedStateFromProps(props,state){
    return {
        getting:props.getting,
        i:props.layout_num
}
    }
    render(){
        return (
            <>
        <h4 style={{textAlign:'center',marginTop:'80px'}}>   Buy Vehicle And Full fill Your Dreams</h4>
            <div class="container" style={{width:'75%'}}>
            <div class="row">
  <div class="col-lg-6">
  <Box2 search_input={this.state.search_input}
   product_name={this.state.getting[this.state.i]?this.state.getting[this.state.i].product_name:"Loading..."}
    product_type={this.state.getting[this.state.i]?this.state.getting[this.state.i].product_type:"Loading"}
     status={this.state.getting[this.state.i]?this.state.getting[this.state.i].status:"Loading..."}
      price={this.state.getting[this.state.i]?this.state.getting[this.state.i].price:"Loading...."} 
      product_id={this.state.getting[this.state.i]?this.state.getting[this.state.i].product_id:"Loading..."} 
      description={this.state.getting[this.state.i]?this.state.getting[this.state.i].description:"Loading..."} 
      seller_id={this.state.getting[this.state.i]?this.state.getting[this.state.i].seller_id:"Loading..."}/>


  </div>
  <div class="col-lg-6">
  <Box1 search_input={this.state.search_input}
   product_name={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].product_name:"Loading..."}
    product_type={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].product_type:"Loading"}
     status={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].status:"Loading..."}
      price={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].price:"Loading...."} 
      product_id={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].product_id:"Loading..."} 
      seller_id={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].seller_id:"Loading..."}/>
    <Box1 search_input={this.state.search_input}
   product_name={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_name:"Loading..."}
    product_type={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_type:"Loading"}
     status={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].status:"Loading..."}
      price={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].price:"Loading...."} 
      product_id={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_id:"Loading..."} 
      product_id={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_id:"Loading..."} 
      description={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].description:"Loading..."} 
      seller_id={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].seller_id:"Loading..."}/>
  </div>

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