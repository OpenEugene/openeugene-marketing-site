import {Contributor, Project} from "./types/types";
import YourPriorities from "./images/yourpriorities.png"
import KingPong from "./images/kingpong.jpg"
// TODO: Replace this with a backend

const virtualTownSquare:Project = {
    title:"Virtual Town Square",
    imgUrl:"https://via.placeholder.com/250",
    description:"Virtual town square is a locally hosted videoconferencing solutions for public and civic projects."
};
const kingPong:Project = {
    title:"King Pong",
    imgUrl:KingPong,
    description:"King-pong is a giant (9ft wide) pong controller used to play pong projected on a giant screen (20ft wide)"
};
const yourPriorities:Project = {
    title:"Your Priorities",
    imgUrl:YourPriorities,
    description:"Your Priorities is a citizen engagement platform, a progressive web app, and a participatory social network that empowers groups of any size to speak with one voice and organize around ideas"
};
const openBoard:Project = {
    title:"OpenBoard",
    imgUrl:YourPriorities,
    description:"An open source version of Switchboard."
};
const contributor1:Contributor = {
    contributorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper elit a erat posuere accumsan. Praesent sodales hendrerit consectetur. Vivamus nec neque ac dolor interdum varius eget at purus. Cras ac augue egestas, vulputate sem id, consectetur velit. Quisque vel ante laoreet, tincidunt mauris sit amet, cursus dui. Vestibulum justo felis, pharetra ac elit et, pretium blandit ipsum. Aenean quis elementum nisi. Quisque non condimentum massa.",
    name: "Contributor Name",
    imgUrl:"https://via.placeholder.com/250"
};
const contributor2:Contributor = {
    contributorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper elit a erat posuere accumsan. Praesent sodales hendrerit consectetur. Vivamus nec neque ac dolor interdum varius eget at purus. Cras ac augue egestas, vulputate sem id, consectetur velit. Quisque vel ante laoreet, tincidunt mauris sit amet, cursus dui. Vestibulum justo felis, pharetra ac elit et, pretium blandit ipsum. Aenean quis elementum nisi. Quisque non condimentum massa.",
    name: "Contributor Name",
    imgUrl:"https://via.placeholder.com/250"
};
const contributor3:Contributor = {
    contributorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper elit a erat posuere accumsan. Praesent sodales hendrerit consectetur. Vivamus nec neque ac dolor interdum varius eget at purus. Cras ac augue egestas, vulputate sem id, consectetur velit. Quisque vel ante laoreet, tincidunt mauris sit amet, cursus dui. Vestibulum justo felis, pharetra ac elit et, pretium blandit ipsum. Aenean quis elementum nisi. Quisque non condimentum massa.",
    name: "Contributor Name",
    imgUrl:"https://via.placeholder.com/250"
};
const contributor4:Contributor = {
    contributorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper elit a erat posuere accumsan. Praesent sodales hendrerit consectetur. Vivamus nec neque ac dolor interdum varius eget at purus. Cras ac augue egestas, vulputate sem id, consectetur velit. Quisque vel ante laoreet, tincidunt mauris sit amet, cursus dui. Vestibulum justo felis, pharetra ac elit et, pretium blandit ipsum. Aenean quis elementum nisi. Quisque non condimentum massa.",
    name: "Contributor Name",
    imgUrl:"https://via.placeholder.com/250"
};
const contributor5:Contributor = {
    contributorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper elit a erat posuere accumsan. Praesent sodales hendrerit consectetur. Vivamus nec neque ac dolor interdum varius eget at purus. Cras ac augue egestas, vulputate sem id, consectetur velit. Quisque vel ante laoreet, tincidunt mauris sit amet, cursus dui. Vestibulum justo felis, pharetra ac elit et, pretium blandit ipsum. Aenean quis elementum nisi. Quisque non condimentum massa.",
    name: "Contributor Name",
    imgUrl:"https://via.placeholder.com/250"
};
const contributor6:Contributor = {
    contributorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper elit a erat posuere accumsan. Praesent sodales hendrerit consectetur. Vivamus nec neque ac dolor interdum varius eget at purus. Cras ac augue egestas, vulputate sem id, consectetur velit. Quisque vel ante laoreet, tincidunt mauris sit amet, cursus dui. Vestibulum justo felis, pharetra ac elit et, pretium blandit ipsum. Aenean quis elementum nisi. Quisque non condimentum massa.",
    name: "Contributor Name",
    imgUrl:"https://via.placeholder.com/250"
};

export const projects: Project[] = [kingPong, yourPriorities, virtualTownSquare, openBoard];
export const contributors: Contributor[] = [contributor1, contributor2, contributor3, contributor4, contributor5, contributor6];