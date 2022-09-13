import React from "react";
import {Grid, Typography, Card, CardContent, IconButton} from '@mui/material';
import {GitHub, Language} from '@mui/icons-material';

const ProjectComponent = ({project}) => {

    const cardStyle = {
        width: "40vw",
    }

    return (
        <Grid margin={2} container rowSpacing={2} columnSpacing={{xs:1, sm: 2}} justifyContent="center" alignItems="center" >
            <Grid item xs={6}>
                <Card style={cardStyle}>
                    <CardContent>
                        {project.video ?
                            <video width="500" controls="controls">
                                <source src={project.video} type="video/mp4">
                                </source>
                            </video>
                            :
                            <img src={project.img} alt={project.title} height="280"></img>
                        }
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card style={cardStyle}>
                    <Card elevation={3} style={{backgroundColor: "#C6CBDA"}}>
                        <Typography variant="h6" component="h6">#{project.id} {project.title}</Typography>
                    </Card>

                    <CardContent>
                        <Typography variant="body2">
                            <ul>
                                {project.description.map((text) => 
                                    <li>{text}</li>
                                )}
                            </ul>
                        </Typography>

                        <Typography variant="body2">Enviornment: {project.stack}</Typography>

                        <CardContent>
                            <IconButton href={project.gitHub} target="_blank" rel="noreferrer"><GitHub /></IconButton>

                            {project.link ? 
                                <IconButton href={project.link}  target="_blank" rel="noreferrer"><Language /></IconButton>
                                :
                                null                         
                            }
                        </CardContent>
                    </CardContent>

                </Card>

            </Grid>

        </Grid>
    )
}

export default ProjectComponent;