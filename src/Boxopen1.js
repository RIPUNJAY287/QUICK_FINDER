import React from "react"
import ReactDOM from "react-dom"
import Item_detailsBox from "./Item_detailsBox"
import MiniBox from "./miniBox"
import Box5 from "./Box5"
import Box1 from "./Box1"
import { withRouter } from "react-router";


class Main extends React.Component{
    render(){

        const { match, location, history } = this.props;
        console.log(location);
        console.log(this.props);
        return (
        <>
            <div class="container" style={{width:'100%'}}>
                <div class="row">
                    <div class="col-lg-9"><Item_detailsBox property = {this.props.location.state}/></div>
                    <div class="col-lg-3"><MiniBox /><MiniBox /></div>
                </div>
                <div class="row">
                    <div class="col-lg-3"><Box5 /></div>
                    <div class="col-lg-3"><Box5 /></div>
                    <div class="col-lg-3"><Box5 /></div>
                    <div class="col-lg-3"><Box5 /></div>

                </div>
            </div>
        </>
            );
    }
}
export default Main;
