export interface Project {
  imgUrl: string;
  description: string;
  title:string;
}
export interface Contributor {
  imgUrl: string;
  contributorDescription: string;
  name:string;
}
export interface Projects {
  projects: Project[];
}
export interface Contributors {
  contributors: Contributor[];
}

