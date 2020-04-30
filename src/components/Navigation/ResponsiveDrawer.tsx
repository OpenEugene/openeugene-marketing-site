import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menuButton: {
    color: "black"
  },
  menuStyle: {
    display: "flex",
    justifyContent: "left!important"
  },
  typography: {
    fontFamily: "Montserrat",
    textTransform: "none",
    fontSize:"1rem"
  }
});

type Anchor = "left";
// TODO: Make this code not ugly
// TODO: Tie this in with global state
export default function ResponsiveDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  // const labels = ["Home", "Projects", "Schedule", "Contributors", "Contact"];
  // const routes = ["/", "/projects", "/schedule", "contributors", "contact"];

  const labels = ["Home", "Projects", "Contributors"];
  const routes = ["/", "/projects", "contributors"];

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {labels.map(
          (text, index) => (
            <ListItem button key={text}>
              <Button disableRipple={true} component={Link} to={routes[index]} className={classes.typography}>
                {text}
              </Button>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <>
      {(["left"] as Anchor[]).map(anchor => (
        <React.Fragment key={anchor}>
          <div className={classes.menuStyle}>
            <IconButton
              aria-label="menu"
              onClick={toggleDrawer(anchor, true)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
