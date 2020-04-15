import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Contributor } from "../../types/types";

const styles = makeStyles({
  contributorImage: {
    flex: 1,
    maxWidth: 500
  },
  contributorDescription: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 15,
    width: "50%",
    maxWidth: "100%"
  }
});

const ContributorTile = (contributor: Contributor) => {
  const classes = styles();
  return (
    <>
      <img src={contributor.imgUrl} className={classes.contributorImage} />
      <div className={classes.contributorDescription}>
        <h3>{contributor.name}</h3>
        <p>{contributor.contributorDescription}</p>
      </div>
    </>
  );
};

export default ContributorTile;
