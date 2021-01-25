import React from 'react'
import ReactDOM from 'react-dom';
class Box1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          product_name:"",
          product_type:"",
          status:"",
          price:"",
          seller_name:"",
          seller_address:"",
          product_id:"",
          seller_id:""
    };
        this.getDetails();
        this.getDetails=this.getDetails.bind(this);
      }
      
      getDetails(){
            console.log("ya1");
            fetch('http://localhost:3005/getDetails', {
                method: 'post',
                body : JSON.stringify({
                }),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              }).then((res) => res.json())
           .then((json) => {
            console.log(this.props.comp_num);
            var i=this.props.comp_num;
            this.setState({
              product_name:json.mes[i].product_name,
              product_type:json.mes[i].product_type,
              status:json.mes[i].status,
              price:json.mes[i].price,
              description:json.mes[i].description,
              product_id:json.mes[i].product_id,
              seller_id:json.mes[i].seller_id
            });
            console.log(this.state.product_id);
          });
              return ;  
        }
    
    render(){
        return (
             <>
            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'508px',backgroundColor:'white'}}> 
            <img style={{width:'100%'}} src="https://fdn.gsmarena.com/imgroot/news/20/03/realme-6-6i-c3-in-europe/-476x249w4/gsmarena_000.jpg" /> 
            <div class="row">
                <div class="col-lg-6 pt-3">
                <h5 style={{textAlign:'center',color:'#3B3E3E'}}>Discription</h5>
                <div class="container" style={{textAlign:'center',color:'#3B3E3E',fontSize:'14px'}}>{this.state.description}</div>
                </div>
                <div class="col-lg-6 pl-4 pt-3">
                   <table style={{textAlign:'center'}}>
                    <tr><td colspan='2' style={{fontWeight:'700',color:'#707070',fontSize:'20px'}}>{this.state.product_name}</td></tr>    
                    <tr><td colspan='2'  style={{fontWeight:'500',color:'#707070'}}>{this.state.product_type}</td></tr>    
                    <tr><td colspan='2'  style={{fontWeight:'400',color:'#707070'}}>{this.state.seller_id}</td></tr>    
                    <tr><td style={{fontWeight:'400',color:'#928D3D',fontWeight:'700',fontSize:'17px'}}>{this.state.price}</td><td style={{fontWeight:'400',color:'#2E7F8F',fontWeight:'600',fontSize:'17px'}}>{this.state.status}</td></tr>
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