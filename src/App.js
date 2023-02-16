import { Fragment } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import PortfolioContainer from './components/PortfolioContainer';

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <PortfolioContainer />
      </ThemeProvider>
    </Fragment>

  );
}

export default App;
