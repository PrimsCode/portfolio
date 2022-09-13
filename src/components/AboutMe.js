import React from "react";
import {Grid, Typography, Button} from '@mui/material';
import portfolioPic from "../assets/prima-portfolio-pic.png";

const AboutMe = ({primaData, resume}) => {
    return (
        <Grid margin={10} align="center" justifyContent="center" alignItems="center">
            <Grid>
                <img src={portfolioPic} alt="Prima Jenkins" width="150" height="150"></img>
                <Typography variant="h2">About Me</Typography>
                
                <Grid margin={2}>
                    <Typography varient="body1">{primaData.bio}</Typography>
                </Grid>


                <Grid margin={2}>
                    <Button id="linkButton" href={resume} target="_blank" rel="noreferrer" variant="contained" color="primary">Download Resume</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutMe;

