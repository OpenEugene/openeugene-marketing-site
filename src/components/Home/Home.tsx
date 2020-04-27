import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
  middleBox: {
    flexGrow: 2,
    minWidth: "60%"
  },
  flexContainer: {
    display: "flex",
    width: "100%"
  },
  pageHeader: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export const Home = () => {
  const classes = styles();
  return (
    <>
      <div className={`${classes.flexContainer} + ${classes.pageHeader}`}>
        <h1>Who Are We?</h1>
      </div>
      <div className={classes.flexContainer}>
        <div>
          <p>
            Welcome to Open Eugene. We are a Code for America Brigade located in
            Eugene, Oregon. We provide leadership and resources to help improve
            digital services for community engagement and access to local
            government programs. We are civic-minded tech and design enthusiasts
            and we are always looking for more projects and contributors. Feel free to work
            on your own project or jump into one in progress.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
