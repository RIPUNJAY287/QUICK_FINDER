import React from 'react'
import ReactDOM from 'react-dom'
class Box4 extends React.Component{
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
            console.log(this.props.comp_num);
            var i=this.props.comp_num;
            this.setState({
              product_name:json.mes[i].product_name,
              product_type:json.mes[i].product_type,
              status:json.mes[i].status,
              price:json.mes[i].price,
              product_id:json.mes[i].product_id,
              seller_name:json.mes[i].seller_name,
              seller_address:json.mes[i].seller_address,
              });
              console.log(this.state.product_id);
          });
              return ;  
        }
      
    
    render(){
        return (
            <>
            <div class="container m-2 p-4" style={{boxShadow:'0 5px 10px rgb(0,0,0,0.16)',height:'670px',padding:'0px',backgroundColor:'white'}}> 
                <div> 
                    <img style={{width:'100%'}}src="https://cdn.shopclues.com/images1/thumbnails/102155/320/320/147438039-102155083-1564203373.jpg"></img>
                </div>
                <div class="container mt-4">
                   <table style={{width:'100%'}}>
                    <tr><td style={{fontWeight:'700',color:'#3E3B3B',fontSize:'22px',textAlign:'center'}}>{this.state.product_name} </td></tr>    
                  </table>
                </div>
           
             </div>
     
            </>
        );
    }
}
export default Box4;