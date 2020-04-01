import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectsPage from "./components/Projects/ProjectsPage";
import {Project} from "./types/types";
import KingPongImage from "./images/kingpong.jpg"
import YourPrioritiesImage from "./images/yourpriorities.png"
import SchedulePage from "./components/Schedule/SchedulePage";
import ContributorsPage from "./components/Contributors/ContributorsPage";

const kingPong:Project = {
    imgUrl:KingPongImage,
    description:" King-pong is a giant (9ft wide) pong controller used to play pong projected on a giant screen (20ft wide)"
};
const yourPriorities:Project = {
    imgUrl:YourPrioritiesImage,
    description:" Your Priorities is a citizen engagement platform, a progressive web app, and a participatory social network that empowers groups of any size to speak with one voice and organize around ideas"
};
const projects: Project[] = [kingPong, yourPriorities];
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
