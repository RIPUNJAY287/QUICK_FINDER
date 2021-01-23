import React from "react"
import ReactDOM from "react-dom"
import Box from "./diaset"
import Layout1 from "./Layout1"
import Layout2 from "./Layout2"
import Layout3 from "./Layout3"
import Layout4 from "./Layout4"
import Caro from "./Caro"
class Main extends React.Component{
    render(){
        return (
        <>
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