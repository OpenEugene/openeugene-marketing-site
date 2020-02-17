import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import ProjectsPage from "./Projects/ProjectsPage";
import {Project} from "./types/types";

const kingPong:Project = {
    imgUrl:"../images/kingpong.jpg",
    description:" King-pong is a giant (9ft wide) pong controller used to play pong projected on a giant screen (20ft wide)"
};
const projects: Project[] = [kingPong];
export const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={() =><ProjectsPage projects={projects}/>} />
                <Route exact path="/schedule" component={ProjectsPage} />
                <Route exact path="/contributors" component={ProjectsPage} />
            </Switch>
    );
};

export default Routes;
