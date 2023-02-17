import React from "react";
import { Grid, Typography, Card, CardContent, IconButton} from '@mui/material';
import { GitHub, Language } from '@mui/icons-material';
import "../../Portfolio.css"

const ProjectBlock = ({ project }) => {

    const cardStyle = { maxWidth:"480px", minHeight:"300px", margin: 10}

    return (
        <Grid container rowSpacing={2} justifyContent="center" alignItems="center" marginTop={2} padding={2}>
            <Card style={{minHeight:"400px"}}>
            <Grid item xs={12}>
                        <Card elevation={3} style={{ backgroundColor: "#C6CBDA" }}>
                            <Typography variant="h6" component="h6">#{project.id} {project.title}</Typography>
                        </Card>
                    </Grid>

                <Grid container className="project-block" >

                    <Grid item xs={12} sm={12} md={6}>
                        <Card style={cardStyle}>
                            {project.video ?
                                <video width="450" controls="controls">
                                    <source src={project.video} type="video/mp4">
                                    </source>
                                </video>
                                :
                                <img src={project.img} alt={project.title} height="280"></img>
                            }
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Card style={cardStyle}>
                            <CardContent>
                                <Typography variant="h6">About the project</Typography>
                                <Typography variant="body2">
                                    <ul>
                                        {project.description.map((text) =>
                                            <li>{text}</li>
                                        )}
                                    </ul>
                                </Typography>
                                <Typography variant="body2">Enviornment: {project.stack}</Typography>
                                <IconButton href={project.gitHub} target="_blank" rel="noreferrer"><GitHub /></IconButton>
                                {project.link ?
                                    <IconButton href={project.link} target="_blank" rel="noreferrer"><Language /></IconButton>
                                    :
                                    null
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default ProjectBlock;