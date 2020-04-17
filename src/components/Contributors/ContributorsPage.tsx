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
  }
    // '@media (max-width: 600px)': {
    //     button: {
    //         width: 200
    //     }
    // }
    

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
            <ContributorTile
              contributorDescription={contributor.contributorDescription}
              name={contributor.name}
              imgUrl={contributor.imgUrl}
            />
        ))}
      </div>
    </>
  );
};

export default ContributorsPage;
