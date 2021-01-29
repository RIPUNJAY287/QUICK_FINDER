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
                first:[],
                getting:[
                  {
                  }
                ],
                searchSuggestions:[],
                search_input:""
              };
              this.filter();
              this.getDetails("");
              this.filter = this.filter.bind(this);
              this.search = this.search.bind(this);
              this.searchSuggestions = this.searchSuggestions.bind(this);
              this.getDetails =this.getDetails.bind(this);    
              this.getSuggestions =this.getSuggestions.bind(this);    
          }
        getDetails(search_input){
        var obj ={};
        obj.search_input=search_input;
        console.log(obj.search_input);
        fetch('http://localhost:3005/getDetails', {
            method: 'post',
            body : JSON.stringify({obj}),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then((res) => res.json())
       .then((json) => {
        console.log(json.mes.length);        
        var meslen=json.mes.length;
        // this.setState({getting:json.mes});         
        this.setState({getting:json.mes})
      });
      return;
      }
      getSuggestions(search_input){
        if(search_input!="")
        {
        var obj ={};
        obj.search_input=search_input;
        console.log(obj.search_input);
        fetch('http://localhost:3005/getDetails', {
            method: 'post',
            body : JSON.stringify({obj}),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then((res) => res.json())
       .then((json) => {
        console.log(json.mes.length);        
        var meslen=json.mes.length;
        // this.setState({getting:json.mes});         
        this.setState({searchSuggestions:json.mes})
      });
      }else{
        this.setState({searchSuggestions:[]});
      }
      return;
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
      search(){
        this.setState({searchSuggestions:[]});
        this.getDetails(document.getElementById("searchInput").value);
        document.getElementById("searchInput").value=""
        return ;
      }
      searchSuggestions(){
        this.getSuggestions(document.getElementById("searchInput").value);
        return ;
      }
      searchano(ani){
        this.getDetails(ani);
        return ;  
      }
    render(){
        return (
        <>

        <div class="container">
        <div class="container">          
          {
          console.log(this.state.getting[0]?this.state.getting[0].product_name:"Loading"),
          array=this.state.first,
          array.map(ani=>(
          <button class="btn btn-outline-dark m-2" onClick={()=>this.searchano(ani)}>{ani}</button>
          ))
        }
        </div>
        <div class="row">
        <div class="col-lg-11">
        <input type="text" class="form-control" id="searchInput" style={{widht:"50%"}} onKeyUp={this.searchSuggestions}/>
        </div>
        <div class="col-lg-1">
        <button class="btn btn-dark" onClick={this.search}>Search</button>
        </div>
        </div>
        <div style={{position:"absolute",backgroundColor:"white",zIndex:2}}>
        {
          array=this.state.searchSuggestions,
          array.map(ani=>(
            <tr><td>{ani.product_name}</td><td>{ani.product_type}</td></tr>
          ))
        }
          </div>
        </div>
        <Caro />
        <Layout1 layout_num ={0} search_input={this.state.search_input} getting ={this.state.getting}/>
        <Layout2 layout_num ={3}  search_input={this.state.search_input} getting ={this.state.getting}/>
        <Layout3 layout_num ={6}  search_input={this.state.search_input} getting ={this.state.getting}/>
        <Layout4 layout_num ={11}  search_input={this.state.search_input} getting ={this.state.getting}/>
        <Layout1 layout_num ={14} search_input={this.state.search_input} getting ={this.state.getting}/>
        <Layout4 layout_num ={17}  search_input={this.state.search_input} getting ={this.state.getting}/>
        
        </>
            );
    }
}
export default Main;