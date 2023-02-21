import React from "react";
import { TOTAL_SCREENS } from "../../utilities/commonUtilities";
import { Link } from "react-scroll";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Stack, Button } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import "../../Portfolio.css"

const Header = ({ primaData }) => {

    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen) => (
                <Link to={screen.id} smooth={true} offset={50} duration={100}>
                    <Button color="info" id={screen.screen_name} key={screen.screen_name}>
                        {screen.screen_name}
                    </Button>

                </Link>
            ))
        )
    }

    return (
        <AppBar color="primary">
            <Toolbar>
                <IconButton href="/" sx={{ p: 0 }} style={{ paddingRight: "10px" }}>
                    <Avatar alt="Prima Jenkins" src={primaData.avatar_url} />
                </IconButton>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                    {primaData.name}
                </Typography>

                <Stack direction='row' spacing={2}>
                    {getHeaderOptions()}
                    <IconButton href={primaData.html_url} target="_blank" rel="noreferrer"><GitHub /></IconButton>
                    <IconButton href={primaData.blog} target="_blank" rel="noreferrer"><LinkedIn /></IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;