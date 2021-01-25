import React from 'react'
import ReactDOM from 'react-dom'
class Box3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                    product_name:"",
                    product_type:"",
                    status:"",
                    price:"",
                    seller_name:"",
                    seller_address:"",
                    product_id:""
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
            var i=this.props.comp_num;
            this.setState({
              product_name:json.mes[i].product_name,
              product_type:json.mes[i].product_type,
              status:json.mes[i].status,
              price:json.mes[i].price,
              seller_name:json.mes[i].seller_name,
              seller_address:json.mes[i].seller_address,
              product_id:json.mes[i].product_id
            });
              console.log(this.state.product_id);
            
          });
              return ;  
        }
    
    render(){
        return (
            <>
            <div class="container m-2" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'330px',padding:'0px',backgroundColor:'white'}}> 
      
                <div class="container"> 
                    <img style={{width:'100%'}}src="https://images-na.ssl-images-amazon.com/images/I/71S4fmaVk5L._SL1500_.jpg"></img>
                </div>
                <div class="container ml-3">
                   <table style={{width:'100%'}}>
                    <tr><td style={{fontWeight:'700',color:'#3E3B3B',fontSize:'20px'}}>{this.state.product_name}</td><td><button class="btn" style={{backgroundColor:'#1C1A1A',color:'#FFF8F8',fontWeight:'700'}}>Explore</button></td></tr>    
                  </table>
                </div>
            </div>
     
            </>
        );
    }
}
export default Box3;