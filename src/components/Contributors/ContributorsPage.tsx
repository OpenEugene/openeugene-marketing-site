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
  sideBox: {
    flexGrow: 1,
    minWidth: "20%"
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

export const ContributorsPage = () => {
  const classes = styles();
  return (
    <>
      <div className={`${classes.flexContainer} + ${classes.pageHeader}`}>
        <h1>Who Are We?</h1>
      </div>
      <div className={classes.flexContainer}>
        <div>
          <p>
            Civic-minded tech and design enthusiasts. We are always looking for
            more projects and contributors. Feel free to work on your own
            project or jump into one in progress.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContributorsPage;
