import React from "react";
import { Grid, Typography, Button } from '@mui/material';
import ProjectBlock from "./ProjectBlock";
import projects from "./Projects"
import "../../Portfolio.css"

const ProjectList = (props) => {
    return (
        <Grid container align="center" className="section-projects" id="project-list">
            <Grid item xs={12} style={{ marginTop: "200px" }}>
                <Typography variant="h2" style={{ marginTop: "30px" }}>Projects</Typography>
                <Button id="linkButton" href={props.resume} target="_blank" rel="noreferrer" variant="contained" color="primary">Download Resume</Button>
            </Grid>

            <Grid item xs={12}>
                {projects.map((project) =>
                    <ProjectBlock project={project} />
                )}
            </Grid>
        </Grid>
    )
}

export default ProjectList;