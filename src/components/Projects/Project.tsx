import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Project } from "../../types/types";


const styles = makeStyles({
  row: {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
},

column: {
  flexBasis: "100%"
},

'@media screen and (min-width: 800px)': {
column: {
    "flex": 1
  }
}
});

const ProjectTile = (project: Project) => {
  const classes = styles();
  return (
      <div className={classes.row}>
        <div className={classes.column}>
          1
        </div>
        <div className={classes.column}>
         2
        </div>
      </div>

  );
};

export default ProjectTile;
