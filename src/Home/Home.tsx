import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  topImgContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    justifyContent:"center"
  },
  displayImg: {
    width: "100%"
  }
});

const Home = () => {
  const classes = styles();
  return (
    <div className={classes.topImgContainer}>
    </div>
  );
};

export default Home;
