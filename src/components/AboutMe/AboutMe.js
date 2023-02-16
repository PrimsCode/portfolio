import React from "react";
import { Link } from "react-scroll";
import { Grid, Typography, Button } from '@mui/material';
import "../../Portfolio.css"

const AboutMe = (props) => {

    const SCREEN_CONSTANTS = {
        description: "This is my bio",
        skills: {
            frontend: ["JavaScript", "React", "Material UI", "HTML", "CSS", "Bootstrap"],
            backend: ["Node JS", "Express", "Java", "Spring Boot", "Python", "Flask", "SQL", "PostgreSQL"]
        },
        highlights: {
            bullets: [
                "Full Stack Web Application",
                "Building REST API",
                "Managing Database",
            ]
        }
    }


    return (
        <Grid container align="center" className="section" id="about-me">

            <Grid item xs={12}>
                <Typography variant="h2">About Me</Typography>

                <Grid marginTop={2}>
                    <Typography varient="body1">{props.data.bio}</Typography>
                </Grid>

                <Grid marginTop={2}>
                    <Button id="linkButton" href={props.resume} target="_blank" rel="noreferrer" variant="contained" color="primary">Download Resume</Button>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h3">Get To Know Me!</Typography>
                <Typography variant="body1">

                </Typography>
                <Link to="contact-form" smooth={true} offset={100} duration={100}>
                    <Button variant="contained" color="primary">Contact Me</Button>
                </Link>

            </Grid>

            <Grid item xs={6}>
                <Typography variant="h3">My Skills</Typography>

                <Typography variant="h6">Frontend</Typography>
                {SCREEN_CONSTANTS.skills.frontend.map((skill) => (
                    <Button variant="contained" color="success" style={{ margin: 4 }}>{skill}</Button>
                ))}

                <Typography variant="h6">Backend</Typography>
                {SCREEN_CONSTANTS.skills.backend.map((skill) => (
                    <Button variant="contained" color="success" style={{ margin: 4 }}>{skill}</Button>
                ))}

            </Grid>

        </Grid>
    )
}

export default AboutMe;

