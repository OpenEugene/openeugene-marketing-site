import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Project } from "../../types/types";

const styles = makeStyles({
  projectImage: {
    flex: 1,
    maxWidth:500
  },
  projectDescription: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection:"column",
    paddingLeft: 15,
    width:"50%",
    maxWidth:"100%"
  }
});

const ProjectTile = (project: Project) => {
  const classes = styles();
  return (
    <>
      <img src={project.imgUrl} className={classes.projectImage} />
      <div className={classes.projectDescription}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </>
  );
};

export default ProjectTile;
