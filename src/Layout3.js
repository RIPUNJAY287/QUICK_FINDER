import React from 'react';
import ReactDOM from 'react-dom'
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
class Layout3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getting: [],
            search_input: "",
            i: 0
        };
    }
    static getDerivedStateFromProps(props, state) {
        return {
            getting: props.getting,
            i: props.layout_num
        }
    }

    render() {
        return (
            <>

        <h4 style={{textAlign:'center',marginTop:'30px'}}>   Buy Vehicle And Full fill Your Dreams</h4>
            <div class="container-fluid" style={{width:'82%'}}>
            <div class="row">
  <div class="col-lg-4 col-md-4 col-sm-4 ">
  <Box3 search_input={this.state.search_input}
   product_name={this.state.getting[this.state.i]?this.state.getting[this.state.i].product_name:""}
   product_images={this.state.getting[this.state.i]?this.state.getting[this.state.i].product_images:""}
    product_type={this.state.getting[this.state.i]?this.state.getting[this.state.i].product_type:""}
     status={this.state.getting[this.state.i]?this.state.getting[this.state.i].status:""}
      price={this.state.getting[this.state.i]?this.state.getting[this.state.i].price:"."} 
      product_id={this.state.getting[this.state.i]?this.state.getting[this.state.i].product_id:""} 
      description={this.state.getting[this.state.i]?this.state.getting[this.state.i].description:""} 
      seller_id={this.state.getting[this.state.i]?this.state.getting[this.state.i].seller_id:""}/>
  <Box3 search_input={this.state.search_input}
   product_name={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].product_name:""}
   product_images={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].product_images:""}
    product_type={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].product_type:""}
     status={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].status:""}
      price={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].price:"."} 
      product_id={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].product_id:""} 
      description={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].description:""}  
      seller_id={this.state.getting[this.state.i+1]?this.state.getting[this.state.i+1].seller_id:""}/>
  </div>
  <div class="col-lg-5 col-md-5 col-sm-5">
  <Box4 search_input={this.state.search_input}
  product_name={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_name:""}
  product_images={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_images:""}
    product_type={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_type:""}
     status={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].status:""}
      price={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].price:"."} 
      product_id={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_id:""} 
      product_id={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].product_id:""} 
      description={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].description:""} 
      seller_id={this.state.getting[this.state.i+2]?this.state.getting[this.state.i+2].seller_id:""}/>
 </div>
  <div class="col-lg-3 col-md-3 col-sm-3">
  <Box5 search_input={this.state.search_input}
   product_name={this.state.getting[this.state.i+3]?this.state.getting[this.state.i+3].product_name:""}
   product_images={this.state.getting[this.state.i+3]?this.state.getting[this.state.i+3].product_images:""}
    product_type={this.state.getting[this.state.i+3]?this.state.getting[this.state.i+3].product_type:""}
     status={this.state.getting[this.state.i+3]?this.state.getting[this.state.i+3].status:""}
      price={this.state.getting[this.state.i+3]?this.state.getting[this.state.i+3].price:"."} 
      product_id={this.state.getting[this.state.i+3]?this.state.getting[this.state.i+3].product_id:""} 
      description={this.state.getting[this.state.i+3]?this.state.getting[this.state.i+3].description:""} 
      seller_id={this.state.getting[this.state.i+3]?this.state.getting[this.state.i+3].seller_id:""}/>
  <Box5 search_input={this.state.search_input}
   product_name={this.state.getting[this.state.i+4+3]?this.state.getting[this.state.i+4+3].product_name:""}
   product_images={this.state.getting[this.state.i+4+3]?this.state.getting[this.state.i+4+3].product_images:""}
    product_type={this.state.getting[this.state.i+4]?this.state.getting[this.state.i+4].product_type:""}
     status={this.state.getting[this.state.i+4]?this.state.getting[this.state.i+4].status:""}
      price={this.state.getting[this.state.i+4]?this.state.getting[this.state.i+4].price:"."} 
      product_id={this.state.getting[this.state.i+4]?this.state.getting[this.state.i+4].product_id:""} 
      description={this.state.getting[this.state.i+4]?this.state.getting[this.state.i+4].description:""} 
      seller_id={this.state.getting[this.state.i+4]?this.state.getting[this.state.i+4].seller_id:""}/>
  <Box5 search_input={this.state.search_input}
   product_name={this.state.getting[this.state.i+5]?this.state.getting[this.state.i+5].product_name:""}
   product_images={this.state.getting[this.state.i+5]?this.state.getting[this.state.i+5].product_images:""}
    product_type={this.state.getting[this.state.i+5]?this.state.getting[this.state.i+5].product_type:""}
     status={this.state.getting[this.state.i+5]?this.state.getting[this.state.i+5].status:""}
      price={this.state.getting[this.state.i+5]?this.state.getting[this.state.i+5].price:"."} 
      product_id={this.state.getting[this.state.i+5]?this.state.getting[this.state.i+5].product_id:""} 
      description={this.state.getting[this.state.i+5]?this.state.getting[this.state.i+5].description:""} 
      seller_id={this.state.getting[this.state.i+5]?this.state.getting[this.state.i+5].seller_id:""}/>
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
export default Layout3;