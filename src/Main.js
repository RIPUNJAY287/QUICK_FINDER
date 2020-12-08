import React from "react"
import ReactDOM from "react-dom"
import Box from "./diaset"
import Layout1 from "./Layout1"
import Layout2 from "./Layout2"
import Layout3 from "./Layout3"
class Main extends React.Component{
    render(){
        return (
        <>
        <Layout3 />
        <Layout1 />
        <Layout2 />
        </>
            );
    }
}
export default Main;