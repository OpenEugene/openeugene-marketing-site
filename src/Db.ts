import {Contributor, Project} from "./types/types";
import YourPriorities from "./images/yourpriorities.png"
import KingPong from "./images/kingpong.jpg"
import FrankieGoldContributorImage from "./images/FrankieGoldContributorImage.jpg"
import MarkDavisContributorImage from "./images/MarkDavisContributorImage.jpg"
import AustinRutledgeContributorImage from "./images/AustinRutledgeContributorImage.jpg"
import EugeneFoodScene from "./images/EugeneFoodScene.png"
import CovidResponse from "./images/CovidResponseProjects.png"

// TODO: Replace this with a backend

const virtualTownSquare:Project = {
    title:"Virtual Town Square",
    imgUrl:"https://via.placeholder.com/250",
    description:"Virtual town square is a locally hosted videoconferencing solutions for public and civic projects.",
    githubLink:"https://github.com/OpenEugene/virtual-town-square"
};
const eugeneFoodScene:Project = {
    title:"Eugene Food Scene",
    imgUrl:EugeneFoodScene,
    description:"The Eugene Food Scene is an interactive map of local places to eat in Eugene.",
    githubLink:"https://github.com/OpenEugene/eugene-food-scene"
};
const kingPong:Project = {
    title:"King Pong",
    imgUrl:KingPong,
    description:"King-pong is a giant (9ft wide) pong controller used to play pong projected on a giant screen (20ft wide)",
    githubLink:"https://github.com/OpenEugene/KingPongGame"
};
const yourPriorities:Project = {
    title:"Your Priorities",
    imgUrl:YourPriorities,
    description:"Your Priorities is a citizen engagement platform, a progressive web app, and a participatory social network that empowers groups of any size to speak with one voice and organize around ideas",
    githubLink:"https://github.com/OpenEugene/your-priorities-app"
};
const openBoard:Project = {
    title:"OpenBoard",
    imgUrl:"https://via.placeholder.com/250",
    description:"An open source version of Switchboard. This project is currently seeking open source contributors",
    githubLink:"https://github.com/OpenEugene/openboard"
};
const littleHelpBook:Project = {
    title:"Little Help Book",
    imgUrl:"https://via.placeholder.com/250",
    description:"Because we all just need a little help. This project is currently seeking open source contributors",
    githubLink:"https://github.com/OpenEugene/little-help-book"
};
const covid19ResponseProjects:Project = {
    title:"COVID Response Projects",
    imgUrl:CovidResponse,
    description:"Open Eugene is hosting an instance of Your Priorities specifically for COVID-19 related projects. If you or your organization need something done to help with a COVID-19 related issue please submit it at https://yrpri.org/group/2870",
    githubLink:"https://github.com/OpenEugene/your-priorities-app",
    hostedLink:"https://yrpri.org/group/2870"
};
const contributor1:Contributor = {
    contributorDescription: "After decade being in a chemical engineering career, Frankie switched gears and became a backend applications developer. Her first job in tech was with IDX Broker working as a PHP developer on the server side of a LAMP stack. It was followed by her current position at VMware as a remote Go (aka Golang) developer working on cloud computing application platforms. Her interest with Go and cloud computing has led her to projects like OpenBoard and containerizing OpenEugene apps with Docker to deploy onto the MVP Studios Kubernetes cluster. Just as teaching has been said to be a good way to master a subject, Frankie believes contributing to the community is a great way to gain skills and improve as a developer.",
    name: "Frankie Gold",
    imgUrl:FrankieGoldContributorImage,
    githubUserName: "@codegold79",
    githubLink:"https://github.com/codegold79"
};
const contributor2:Contributor = {
    contributorDescription: "Founded Open Eugene as Mozilla Open Leaders project that became the Open Eugene Festival in 2018.  Open Eugene became a Code for America brigade in 2019 to join the national network of civic software-as-infrastructure projects.  Mark works as a  Captain for Open Eugene galvanizing civic tech leadership with local agencies to support efforts related to COVID response.  Mark also founded MVP Studio that provides hosting for civic projects, Dark Matter Consulting and the CodeChops coworking space in Eugene.",
    name: "Mark Davis",
    imgUrl:MarkDavisContributorImage,
    githubUserName: "@nohorse",
    githubLink:"https://github.com/nohorse"
};
const contributor3:Contributor = {
    contributorDescription: "A graduate of Lane Community College, Austin Rutledge is a seasoned full stack web developer. He has experience with many technologies and his favorite stack is React/C#/SQL. He has worked with some of the top start ups and companies in town. His favorite thing about programming is building cool things that people want to use. He is currently working as an independent technology consultant for various clients and loves contributing to open source projects in his spare time.",
    name: "Austin Rutledge",
    imgUrl:AustinRutledgeContributorImage,
    githubUserName: "@austinrutledge0",
    githubLink:"https://github.com/austinrutledge0"
};

export const projects: Project[] = [covid19ResponseProjects, eugeneFoodScene, kingPong, yourPriorities, virtualTownSquare, openBoard, littleHelpBook];
export const contributors: Contributor[] = [contributor1, contributor2, contributor3];