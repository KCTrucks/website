import { createMuiTheme } from '@material-ui/core/styles';

import { YELLOW, GREY } from './constants';

// https://material-ui.com/customization/palette/
export default createMuiTheme({
  typography: {
    h1: {
      fontSize: '70px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '40px'
    },
    h3: {
      fontSize: '25px'
    },
    body1: {
      fontSize: '19px'
    },
    body2: {
      fontSize: '16px'
    },
    subtitle1: {
      fontSize: '21px',
      lineHeight: '1.25em'
    },
    button: {
      fontSize: '18px',
      textTransform: 'none'
    }
  },
  button: {
    borderRadius: '30px'
  },
  palette: {
    primary: {
      light: YELLOW.light,
      main: YELLOW.main,
      dark: YELLOW.dark,
      text: YELLOW.text
    },
    secondary: {
      light: GREY.light,
      main: GREY.main,
      dark: GREY.dark,
      text: GREY.text
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          boxSizing: 'border-box',
          margin: 0
        }
      }
    }
  }
});
