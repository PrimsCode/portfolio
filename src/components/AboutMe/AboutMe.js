import React from "react";
import { Link } from "react-scroll";
import { Grid, Typography, Button, Paper, ListItem } from '@mui/material';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import "../../Portfolio.css"

const AboutMe = (props) => {

    const SCREEN_CONSTANTS = {
        description: "An upper elementary teacher turned Software Engineer with an extensive experience in problem-solving and effective communication. Demonstrated strength as a team player who has taken on other leadership roles and initiatives to help the organization I was a part of achieving its goals. Highly motivated to advance and expand my skill set through self-studying, mentorship, and challenging projects.",
        skills: {
            frontend: ["JavaScript", "React", "jQuery", "Material UI", "Bootstrap", "HTML", "CSS"],
            backend: ["Node JS", "Express", "Java", "Spring Boot", "Python", "Flask", "SQL", "PostgreSQL"]
        },
        highlights: {
            bullets: [
                "Full Stack Web Application",
                "Building RESTful API",
                "Managing Database",
            ]
        }
    }

    return (
        <Grid container align="center" className="section" id="about-me">

            <Grid item xs={12} marginTop={20}>
                <Typography variant="h2">About Me</Typography>

                <Grid marginTop={2} style={{ maxWidth: "600px" }}>
                    <Typography varient="body1">
                        {SCREEN_CONSTANTS.description}
                    </Typography>
                </Grid>

                <Grid marginTop={2}>
                    <Button id="linkButton" href={props.resume} target="_blank" rel="noreferrer" variant="contained" color="primary">Download Resume</Button>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Paper elevation={3} style={{ maxWidth: "600px", minHeight: "400px", padding: 20 }}>
                    <Typography variant="h3" style={{ padding: 10 }}>My Skills</Typography>
                    <Grid item style={{ padding: 10 }}>
                        {SCREEN_CONSTANTS.highlights.bullets.map((skill) => (
                            <ListItem>
                                <ListItemDecorator><KeyboardIcon /></ListItemDecorator>
                                <Typography variant="body1" style={{ fontSize: "18px" }}>{skill}</Typography>

                            </ListItem>
                        ))}
                    </Grid>

                    <Typography variant="h6" style={{ padding: 10 }}>Frontend</Typography>
                    {SCREEN_CONSTANTS.skills.frontend.map((skill) => (
                        <Button variant="contained" color="success" style={{ margin: 4 }}>{skill}</Button>
                    ))}

                    <Typography variant="h6" style={{ padding: 10 }}>Backend</Typography>
                    {SCREEN_CONSTANTS.skills.backend.map((skill) => (
                        <Button variant="contained" color="success" style={{ margin: 4 }}>{skill}</Button>
                    ))}
                </Paper>

            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3" style={{ maxWidth: "600px", padding: 10 }}>Have an idea for a project that I might be able to help you with?</Typography>
                <Link to="contact-form" smooth={true} offset={100} duration={100}>
                    <Button variant="contained" color="primary" style={{ padding: 10 }}>Contact Me</Button>
                </Link>
            </Grid>

        </Grid>
    )
}

export default AboutMe;

