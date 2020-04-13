import {Project} from "./types/types";
// TODO: Replace this with a backend

const virtualTownSquare:Project = {
    title:"Virtual Town Square",
    imgUrl:"https://via.placeholder.com/250",
    description:"Virtual town square is a locally hosted videoconferencing solutions for public and civic projects."
};
const kingPong:Project = {
    title:"King Pong",
    imgUrl:"https://via.placeholder.com/250",
    description:"King-pong is a giant (9ft wide) pong controller used to play pong projected on a giant screen (20ft wide)"
};
const yourPriorities:Project = {
    title:"Your Priorities",
    imgUrl:"https://via.placeholder.com/250",
    description:"Your Priorities is a citizen engagement platform, a progressive web app, and a participatory social network that empowers groups of any size to speak with one voice and organize around ideas"
};
export const projects: Project[] = [kingPong, yourPriorities, virtualTownSquare];