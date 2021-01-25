import React from "react"
import ReactDOM from "react-dom"
import Box from "./diaset"
import Layout1 from "./Layout1"
import Layout2 from "./Layout2"
import Layout3 from "./Layout3"
import Layout4 from "./Layout4"
import Caro from "./Caro"
var array=[];
class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
                first:[]
                };
    this.filter();
    this.filter = this.filter.bind(this);
  }

       filter(){
        fetch('http://localhost:3005/filter', {
          method: 'post',
          body : JSON.stringify({
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
     .then((json) => {
         this.setState({first:json.mes});
      });
        return ;
    }
    render(){
        return (
        <>
        {
          array=this.state.first,
          array.map(ani=>(
          <button class="btn btn-outline-dark m-2">{ani}</button>
          ))
        }<br></br>
        Welcome {sessionStorage.getItem("username")}
        <Caro />
        <Layout1 />
        <Layout2 />
        <Layout3 />
        <Layout4 /> 
        
        </>
            );
    }
}
export default Main;