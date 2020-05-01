import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Projects } from "../../types/types";
import ProjectTile from "../Projects/Project";

const styles = makeStyles({
  projectDescription: {
    flexGrow: 2,
    minWidth: "60%"
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "100%"
  },
  "@media (max-width: 600px)": {
    flexContainer: {
      flexDirection: "column"
    }
  },
  pageHeader: {
    alignItems: "center",
    justifyContent: "center"
  },
  projectRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderLeft: "solid 0px transparent",
    borderRight: "solid 0px transparent",
    borderBottom: "solid 0px transparent",
    boxShadow: "0 0 5px #333",
    marginTop: 10,
    marginBottom: 10
  }
});

export const ProjectsPage = (projects: Projects) => {
  const classes = styles();
  return (
    <>
      <div className={`${classes.flexContainer} + ${classes.pageHeader}`}>
        <h1>Projects</h1>
      </div>
      <div className={classes.flexContainer}>
        {projects.projects.map((project, index) => (
          <div className={classes.projectRow} key={index}>
            <ProjectTile
              description={project.description}
              title={project.title}
              imgUrl={project.imgUrl}
              githubLink={project.githubLink}
              hostedLink={project.hostedLink}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
