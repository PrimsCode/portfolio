import {createTheme} from '@mui/material';


const theme = createTheme({
    palette: {
        primary: {
          light: '#F4CB84',
          main: '#DDAE5C',
          dark: '#CD9B45',
          contrastText: '#323449',
        },
        secondary: {
          light: '#C6CBDA',
          main: '#777CAD',
          dark: '#323449',
          contrastText: '#fff',
        },
        success: {
            light: '#D3E4E8',
            main: '#A8D0D8',
            dark: '#8CB2BB',
            contrastText: '#323449',
          },
        info: {
            main: '#323449',
          },
      },
      typography: {
        fontFamily: "'Staatliches', 'Barlow Semi Condensed', sans-serif",
        h1: {
          fontSize: "5rem",
          letterSpacing:"0.1em"
        },
        h2: {
          fontSize: "3rem",
          letterSpacing:"0.09em"
        },
        h3: {
          fontSize: "2rem",
          letterSpacing:"0.1em"
        },
        h6: {
          fontSize: "1.20rem",
          letterSpacing:"0.1em"
        },
        body1: {
          fontFamily:"'Barlow Semi Condensed', sans-serif",
          fontSize: "1.25rem"
        },
        body2: {
          fontFamily:"'Barlow Semi Condensed', sans-serif",
          fontSize: "1rem"
        },
        button: {
          fontFamily: "'Staatliches'",
          fontWeight: 500,
        },
      },
});

export default theme;