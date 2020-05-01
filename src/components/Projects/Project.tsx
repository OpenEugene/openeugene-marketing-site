import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Project } from "../../types/types";
import GitHubButton from "react-github-btn";

const styles = makeStyles({
  "@media (max-width: 600px)": {
    projectImage: {
      width: "100%"
    },
    githubButton: {
      paddingBottom: 20
    }
  },
  projectImage: {
    flex: 1,
    maxWidth: 500,
    maxHeight: 250,
    height: "100%"
  },
  noProjectImage: {
    display: "flex",
    width: 500,
    height: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  projectDescription: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
    width: "50%"
  },
  linkButtonContainer: {
    paddingBottom: 10
  },

  noImageBackgroundTitle: {
    color: "white",
    fontSize: "2.5rem"
  },
  githubButton: {}
});

const ProjectTile: React.FunctionComponent<Project> = (project: Project) => {
  const classes = styles();
  // stores possible background colors for the backgrounds of projects without images yet
  const backgroundColors = [
    "#D000C3",
    "#FF40FF",
    "#00FCD3",
    "#00FE8D",
    "#00FE6E"
  ];
  // selects a random color value from the array and assigns it to a JSS class for the imageless background
  const noImageBackground = {
    backgroundColor:
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
  };
  return (
    <>
      {project.imgUrl ? (
        <img src={project.imgUrl} className={classes.projectImage} />
      ) : (
        <div className={classes.noProjectImage} style={noImageBackground}>
          <p className={classes.noImageBackgroundTitle}>{project.title}</p>
        </div>
      )}
      <div className={classes.projectDescription}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={classes.githubButton}>
          {project.hostedLink && (
            <div className={classes.linkButtonContainer}>
              <a href={project.hostedLink}>Check out {project.title}!</a>
            </div>
          )}
          <GitHubButton href={project.githubLink}>
            Follow {project.title}
          </GitHubButton>
        </div>
      </div>
    </>
  );
};

export default ProjectTile;
