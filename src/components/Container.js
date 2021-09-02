import React from "react";
import { Switch , Route } from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";


class Container extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/soda" component={Soda}></Route>
                    <Route exact path="/chips" component={Chips}></Route>
                    <Route exact path="/sardines" component={Sardines}></Route>
                </Switch>
            </React.Fragment>

        )
    }
}

export default Container ; 