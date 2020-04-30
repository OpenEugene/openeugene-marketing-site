import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "../../Routes";
import banner from "../../images/banner.png";
import ResponsiveDrawer from "./ResponsiveDrawer";
import Media from "react-media";

const styles = makeStyles({
  root: {
    flexGrow: 1,
    fontFamily: "Montserrat",
    fontWeight: 600,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  buttonHover: {
    "&:hover": {
      borderRadius: 0,
      borderBottom: "1.5px solid #FF40FF",
      backgroundColor: "transparent"
    }
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
  toolbar: {
    justifyContent: "center!important" as "center"
  },
    "@media (max-width: 600px)": {
        toolbar: {
            justifyContent: "left!important" as "center"
        }
    },
  topImg: {
    width: "100%",
    height: 225
  },
  aligner: {
    alignItems: "center",
    justifyContent: "center",
    width: "75%"
  }
});

export const NavBar = () => {
  const classes = styles();
  const history = createBrowserHistory();

  return (
    <>
      <Router history={history}>
        <div className={classes.root}>
          <img src={banner} className={classes.topImg} />
          <AppBar position="static" className={classes.backGround}>
            <Toolbar className={classes.toolbar}>
              <Media
                query="(max-width: 599px)"
                render={() => <ResponsiveDrawer />}
              />
              <Media
                query="(min-width: 600px)"
                render={() => (
                  <>
                    <Button
                      disableRipple={true}
                      className={`${classes.typography} + ${classes.buttonHover}`}
                      component={Link}
                      to="/"
                    >
                      Home
                    </Button>
                    <Button
                      disableRipple={true}
                      className={`${classes.typography} + ${classes.buttonHover}`}
                      component={Link}
                      to="/projects"
                    >
                      Projects
                    </Button>
                    {/*<Button*/}
                    {/*  disableRipple={true}*/}
                    {/*  className={`${classes.typography} + ${classes.buttonHover}`}*/}
                    {/*  component={Link}*/}
                    {/*  to="/schedule"*/}
                    {/*>*/}
                    {/*  Schedule*/}
                    {/*</Button>*/}
                    <Button
                      disableRipple={true}
                      className={`${classes.typography} + ${classes.buttonHover}`}
                      component={Link}
                      to="/contributors"
                    >
                      Contributors
                    </Button>
                    {/*<Button*/}
                    {/*  disableRipple={true}*/}
                    {/*  className={`${classes.typography} + ${classes.buttonHover}`}*/}
                    {/*  component={Link}*/}
                    {/*  to="/contact"*/}
                    {/*>*/}
                    {/*  Contact*/}
                    {/*</Button>*/}
                  </>
                )}
              />
            </Toolbar>
          </AppBar>
          <div className={classes.aligner}>
            <Routes />
          </div>
        </div>
      </Router>
    </>
  );
};
