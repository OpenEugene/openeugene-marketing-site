import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Contributor, Contributors} from "../../types/types";
import ContributorTile from "./Contributor";

const styles = makeStyles({
  contributorDescription: {
    flexGrow: 2,
    minWidth: "60%"
  },
  flexContainer: {
    display: "flex",
    flexWrap:"wrap",
    maxWidth:"100%"
  },
  pageHeader: {
    alignItems: "center",
    justifyContent: "center"
  },
  contributorRow: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 0",
    flexWrap: "wrap"
  }
});

export const ContributorsPage = (contributors:Contributors) => {
  const classes = styles();
  return (
      <>
        <div className={`${classes.flexContainer} + ${classes.pageHeader}`}>
          <h1>Contributors</h1>
        </div>
        <div className={classes.flexContainer}>
          {contributors.contributors.map((contributor: Contributor, index) => (
              <div className={classes.contributorDescription}>
                <ContributorTile contributorDescription={contributor.contributorDescription} name={contributor.name} imgUrl={contributor.imgUrl}/>
              </div>
          ))}
        </div>
      </>
  );
};

export default ContributorsPage;
