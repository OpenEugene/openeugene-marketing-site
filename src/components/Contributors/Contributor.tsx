import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Contributor } from "../../types/types";

const styles = makeStyles({
  contributor: {
    width: "33.33%"
  },
  contributorImage: {
    maxHeight: 250,
    width: "95%"
  },
  contributorDescription: {
    maxHeight: 500,
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
