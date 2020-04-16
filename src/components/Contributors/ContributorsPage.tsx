import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Contributor, Contributors } from "../../types/types";
import ContributorTile from "./Contributor";

const styles = makeStyles({
  flexContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  pageHeader: {
    alignItems: "center",
    justifyContent: "center"
  },
  contributorContainer: {
      flexWrap: "wrap",
    maxWidth: "33.33%"
  }
});

export const ContributorsPage = (contributors: Contributors) => {
  const classes = styles();
  return (
    <>
      <div className={`${classes.flexContainer} + ${classes.pageHeader}`}>
        <h1>Contributors</h1>
      </div>
      <div className={classes.flexContainer}>
        {contributors.contributors.map((contributor: Contributor, index) => (
          <div className={classes.contributorContainer}>
            <ContributorTile
              contributorDescription={contributor.contributorDescription}
              name={contributor.name}
              imgUrl={contributor.imgUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContributorsPage;
