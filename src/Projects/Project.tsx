import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import KingpongImage from "../images/kingpong.jpg";

const styles = makeStyles({
  topImgContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    justifyContent: "center"
  },
  displayImg: {
    width: "100%"
  },
  sideBox: {
    flexGrow: 1,
    minWidth: "20%"
  },
  middleBox: {
    flexGrow: 2,
    minWidth: "60%"
  },
  projectImage: {
    flexGrow: 1,
    minWidth: "40%"
  },
  projectDescription: {
    flexGrow: 2,
    minWidth: "60%"
  },
  projectDescriptionText: {
    paddingTop:"10%"
  },
  flexContainer: {
    display: "flex",
    width: "100%",
    padding:20
  },
  pageHeader: {
    alignItems: "center",
    justifyContent: "center"
  }
});

const Project = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.flexContainer}>
        <div className={classes.projectImage}>
          <img src={KingpongImage} />
        </div>
        <div className={classes.projectDescription}>
          <p className={classes.projectDescriptionText}>
            King-pong is a giant (9ft wide) pong controller used to play pong
            projected on a giant screen (20ft wide)
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
