import React from "react";
import { Route, Switch } from "react-router-dom";

//General routes
import Home from "./pages/home";

function Routes(props) {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
}

export default Routes;