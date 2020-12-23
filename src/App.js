import React from 'react'
import ReactDOM from "react-dom"
import {Route,Switch} from "react-router-dom"
import Main from "./Main"
import Login from "./login";
import Signup from "./Signup"
import About from "./About";
import Sell from "./Sell";
import Boxopen1 from "./Boxopen1";
const App =() =>{
        return (<>
        <Switch>
            <Route exact path='/QUICK_FINDER/' component={Main}/>
            <Route path='/QUICK_FINDER/login' component={Login} />
            <Route path='/QUICK_FINDER/Signup' component={Signup} />
            <Route path='/QUICK_FINDER/About' component={About} />
            <Route path='/QUICK_FINDER/Sell' component={Sell} />            
            <Route path='/QUICK_FINDER/Boxopen1' component={Boxopen1} />            
            <Route component={Error} />
        </Switch>
            </>
        );

}
export default App;