import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HomeImage from "../../images/HomePage1.jpg"
// @ts-ignore
import { SocialIcon } from 'react-social-icons';

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
  },
  paragraphHeader:{
    fontSize:"1.5rem"
  },
  socialMediaIconsContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  socialMediaIcons:{
    margin:2.5
  },
  bodyImage:{
    maxWidth: 600
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
          <img src={HomeImage} className={classes.bodyImage}></img>
          <p>
            Welcome to Open Eugene. We are a Code for America Brigade located in
            Eugene, Oregon. We provide leadership and resources to help improve
            digital services for community engagement and access to local
            government programs. We are civic-minded tech and design enthusiasts
            and we are always looking for more projects and contributors. Feel free to work
            on your own project or jump into one in progress.
          </p>
          <p className={classes.paragraphHeader}>Have a project?</p>
          <p>We eagerly accept new projects. Please reach out to us via the contact page on this website.</p>
          <p className={classes.paragraphHeader}>Social Media</p>
          <div className={classes.socialMediaIconsContainer}>
            <SocialIcon url="https://www.facebook.com/openeugene" className={classes.socialMediaIcons} />
            <SocialIcon url="https://twitter.com/open_eugene" className={classes.socialMediaIcons} />
            <SocialIcon url="https://github.com/OpenEugene" className={classes.socialMediaIcons} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
