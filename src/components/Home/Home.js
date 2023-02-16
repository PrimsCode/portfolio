import React from "react";
import { Grid, Typography, Button, IconButton } from '@mui/material';
import portfolioPic from "../../assets/prima-portfolio-pic.png";
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import "../../Portfolio.css"

const Home = (props) => {

    return (
        <Grid container align="center" className="section" id="home">
            <Grid item sx={12}>
                <img src={portfolioPic} alt="Prima Jenkins" width="150" height="150"></img>
                <Typography variant="h1">{props.data.name}</Typography>
                <Typography variant="h3">Software Engineer</Typography>

                <Grid item sx={12} margin={2}>
                    <Button id="linkButton" href={props.resume} target="_blank" rel="noreferrer" variant="contained" color="primary">Download Resume</Button>
                </Grid>

                <Grid item sx={12} margin={2}>
                    <IconButton href="/contact-me"><Email /></IconButton>
                    <IconButton href={props.data.html_url} target="_blank" rel="noreferrer"><GitHub /></IconButton>
                    <IconButton href={props.data.blog} target="_blank" rel="noreferrer"><LinkedIn /></IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;