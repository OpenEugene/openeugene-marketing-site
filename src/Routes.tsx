import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";


const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/schedule" component={Projects} />
            </Switch>
    );
};

export default Routes;
