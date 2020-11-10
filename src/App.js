import { BrowserRouter } from 'react-router-dom';

import Navigation from './navigation';

// Styling
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <CssBaseline />
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
