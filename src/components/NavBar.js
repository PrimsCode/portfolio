import React from "react";

import {AppBar, Toolbar, Typography, IconButton, Avatar, Stack , Button} from '@mui/material';
import {LinkedIn, GitHub} from '@mui/icons-material';
import "./Portfolio.css"

const NavBar = ({primaData}) => {

    return (
        <AppBar position='static' color="primary">
            <Toolbar>
            <IconButton href="/" sx={{ p:0 }}>
                <Avatar alt="Prima Jenkins" src={primaData.avatar_url} />
            </IconButton>
            <Typography variant="h6" component='div' sx={{flexGrow: 1}}>
                {primaData.name}
            </Typography>

            <Stack direction='row' spacing={2}>
                <Button href="/about-me" color="info">About Me</Button>
                {/* <Button href="/skills" color="info">Skills</Button> */}
                <Button href="/projects" color="info">Projects</Button>
                <Button href="/contact-me" color="info">Contact</Button>
                <IconButton color="info" href={primaData.html_url} target="_blank" rel="noreferrer"><GitHub /></IconButton>
                <IconButton color="info" href={primaData.blog} target="_blank" rel="noreferrer"><LinkedIn /></IconButton>
            </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;