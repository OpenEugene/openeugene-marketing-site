import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectsPage from "./components/Projects/ProjectsPage";
import SchedulePage from "./components/Schedule/SchedulePage";
import ContributorsPage from "./components/Contributors/ContributorsPage";
import {projects} from "./Db";

export const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={() =><ProjectsPage projects={projects}/>} />
                <Route exact path="/schedule" component={SchedulePage} />
                <Route exact path="/contributors" component={ContributorsPage} />
            </Switch>
    );
};

export default Routes;
