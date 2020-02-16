import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  footerStyle: {
    background: "linear-gradient(to right, #00ff6d, #00faff)",
    display: "block",
    padding: "20px",
    height: "60px"
  }
});

export default function Footer() {
  const classes = styles();

  return (
    <div>
      <div className={classes.footerStyle} />
    </div>
  );
}
