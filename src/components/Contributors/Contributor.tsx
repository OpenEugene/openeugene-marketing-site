import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Contributor } from "../../types/types";

const styles = makeStyles({
  contributor: {
    width: "32.25%",
    borderLeft: "solid 0px transparent",
    borderRight: "solid 0px transparent",
    borderBottom: "solid 0px transparent",
    boxShadow: "0 0 5px #333",
    margin: 5
  },
  "@media (max-width: 600px)": {
    contributor: {
      width: "100%",
      marginBottom: 25
    }
  },
  contributorImage: {
    width: "100%",
    borderBottom: "solid 1px #333",
    maxHeight: "50%"
  },
  contributorDescription: {
    maxHeight: "50%",
    margin: 5
  }
});

const ContributorTile = (contributor: Contributor) => {
  const classes = styles();
  return (
    <div className={classes.contributor}>
      <img src={contributor.imgUrl} className={classes.contributorImage} />
      <div className={classes.contributorDescription}>
        <h3>{contributor.name}</h3>
        <p>{contributor.contributorDescription}</p>
      </div>
    </div>
  );
};

export default ContributorTile;
