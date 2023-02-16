import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#B2C5DF',
      main: '#D3DEED',
      // contrastText: '#323449',
    },
    secondary: {
      light: '#FAABA2',
      main: '#FF7B6C',
      // contrastText: '#323449',
    },
    success: {
      light: '#CBE1CF',
      main: '#9FCBA8',
      // contrastText: '#323449',
    }
  },
  typography: {
    fontFamily: "'Staatliches', 'Barlow Semi Condensed', sans-serif",
    h1: {
      fontSize: "5rem",
      letterSpacing: "0.1em"
    },
    h2: {
      fontSize: "3rem",
      letterSpacing: "0.09em"
    },
    h3: {
      fontSize: "2rem",
      letterSpacing: "0.1em"
    },
    h6: {
      fontSize: "1.20rem",
      letterSpacing: "0.1em"
    },
    body1: {
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: "1.25rem"
    },
    body2: {
      fontFamily: "'Barlow Semi Condensed', sans-serif",
      fontSize: "1rem"
    },
    button: {
      fontFamily: "'Staatliches'",
      fontWeight: 500,
    },
  },
});

export default theme;