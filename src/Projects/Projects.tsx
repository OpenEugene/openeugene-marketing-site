import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
    topImgContainer: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        justifyContent: "center"
    },
    displayImg: {
        width: "100%"
    },
    sideBox: {
        flexGrow: 1,
        minWidth: "20%"
    },
    middleBox: {
        flexGrow: 2,
        minWidth: "60%"
    },
    projectImage:{
        flexGrow: 1,
        minWidth: "40%"
    },
    projectDescription:{
        flexGrow: 2,
        minWidth: "60%"
    },
    flexContainer: {
        display: "flex",
        width: "100%"
    },
    pageHeader: {
        alignItems: "center",
        justifyContent: "center"
    }
});

const Projects = () => {
    const classes = styles();
    return (
        <>
            <div className={`${classes.flexContainer} + ${classes.pageHeader}`}>
                <h1>Projects</h1>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.sideBox} />
                <div className={classes.middleBox}>
                    <div className={classes.projectImage}/>
                    <div className={classes.projectDescription}/>
                </div>
                <div className={classes.sideBox} />
            </div>
        </>
    );
};

export default Projects;
