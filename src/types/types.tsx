export interface Project {
  imgUrl: string;
  description: string;
  title:string;
  githubLink:string;
}
export interface Contributor {
  imgUrl: string;
  contributorDescription: string;
  name:string;
  githubLink?:string;
  githubUserName?:string;
}
export interface Projects {
  projects: Project[];
}
export interface Contributors {
  contributors: Contributor[];
}

