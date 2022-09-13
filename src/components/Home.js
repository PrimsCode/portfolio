import React from "react";
import {Grid, Typography, Button, IconButton} from '@mui/material';
import portfolioPic from "../assets/prima-portfolio-pic.png";
import {LinkedIn, GitHub, Email} from '@mui/icons-material';
import "./Portfolio.css"

const Home = ({primaData, resume}) => {
    return (
        <Grid margin={20} align="center" justifyContent="center" alignItems="center">
            <Grid>
                <img src={portfolioPic} alt="Prima Jenkins" width="150" height="150"></img>
                <Typography variant="h1">{primaData.name}</Typography>
                <Typography variant="h3">Software Engineer</Typography>

                <Grid margin={2}>
                    <Button id="linkButton" href={resume} target="_blank" rel="noreferrer" variant="contained" color="primary">Download Resume</Button>
                </Grid>

                <Grid margin={2}>
                    <IconButton href="/contact-me"><Email /></IconButton>
                    <IconButton href={primaData.html_url} target="_blank" rel="noreferrer"><GitHub /></IconButton>
                    <IconButton href={primaData.blog}  target="_blank" rel="noreferrer"><LinkedIn /></IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;