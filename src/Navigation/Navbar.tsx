import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const styles = makeStyles({
  underLine:{

  },
  root: {
    flexGrow: 1,
    fontFamily: "Montserrat",
    fontWeight: 600,
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center"
  },
  buttonHover: {
    '&:hover': {
      borderRadius: 0,
      borderBottom: "1px solid #FF40FF",
      backgroundColor: "transparent"
    }
  },
  bannerImg: {
    width:"100%",
    height:300
  },
  typography: {
    fontFamily: "Montserrat",
    textTransform: "none"
  },
  title: {
    flexGrow: 1
  },
  backGround: {
    backgroundColor: "white"
  },
  toolbar:{
    justifyContent: "center!important" as "center"
  },
});

export default  function NavBar() {
  const classes = styles();
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.backGround}>
          <Toolbar className={classes.toolbar}>
            <Button className={`${classes.typography} + ${classes.buttonHover}`} component={Link} to="/">
              Home
            </Button>
            <Button className={`${classes.typography} + ${classes.buttonHover}`} component={Link} to="/about">
              Projects
            </Button>
            <Button
                className={`${classes.typography} + ${classes.buttonHover}`}
              component={Link}
              to="/upcoming-classes"
            >
              Schedule
            </Button>
            <Button className={`${classes.typography} + ${classes.buttonHover}`}>Contact</Button>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}
