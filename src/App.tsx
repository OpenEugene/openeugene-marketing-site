import React from "react";
import "./App.css";
import NavBar from "../src/Navigation/Navbar";
import banner from "./images/banner.png";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  bannerImg: {
    width: "100%",
    height: 300
  },
    footerStyle: {
        background:"linear-gradient(to right, #00ff6d, #00faff)",
        height: 100,
        marginBottom: -100,
        minHeight: "100%"
    }
});

const App = () => {
  const classes = styles();
  return (
    <div className="App">
      <img src={banner} className={classes.bannerImg} />
      <NavBar />
      <div className={classes.footerStyle}/>
    </div>
  );
};

export default App;
