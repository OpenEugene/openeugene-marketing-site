import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Project } from "../../types/types";
import GitHubButton from "react-github-btn";

const styles = makeStyles({
  projectImage: {
    flex: 1,
    maxWidth:500,
    maxHeight:250,
    height:"100%"
  },
  projectDescription: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection:"column",
    paddingLeft: 15,
    width:"50%"
  },
  linkButton: {
    backgroundColor: "#FF40FF"
  },
  linkButtonContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "right",
    paddingTop: 15
  },
});

const ProjectTile = (project: Project) => {
  const classes = styles();
  return (
    <>
      <img src={project.imgUrl} className={classes.projectImage} />
      <div className={classes.projectDescription}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <GitHubButton
            href={project.githubLink}
        >
          Follow {project.title}
        </GitHubButton>

      </div>
    </>
  );
};

export default ProjectTile;
