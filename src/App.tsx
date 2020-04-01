import React from "react";
import "./App.css";
import {NavBar} from "./components/Navigation/Navbar";
import banner from "./images/banner.png";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  bannerImg: {
    width: "100%",
    height: 225
  },
  body: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }
});

const App = () => {
  const classes = styles();
  return (
    <div className="App">
      <img src={banner} className={classes.bannerImg} />
      <NavBar />
    </div>
  );
};

export default App;
