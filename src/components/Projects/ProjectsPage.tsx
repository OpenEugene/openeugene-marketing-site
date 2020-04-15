import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Projects} from "../../types/types";
import ProjectTile from "../Projects/Project";

const styles = makeStyles({
    projectDescription: {
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
    projectRow: {
        display: "flex",
        flexDirection: "row",
        padding: "10px 0",
        flexWrap: "wrap"
    }
});

export const ProjectsPage = (projects:Projects) => {
    const classes = styles();
    return (
        <>
            <div className={`${classes.flexContainer} + ${classes.pageHeader}`}>
                <h1>Projects</h1>
            </div>
            <div className={classes.flexContainer}>
                    {projects.projects.map((project, index) => (
                        <div className={classes.projectRow}>
                                <ProjectTile description={project.description} title={project.title} imgUrl={project.imgUrl}/>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default ProjectsPage;
