import React from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// Images
import KCLogo from '../images/logos/KC.png';

// Constants
import { GREY } from '../constants';

export default function Footer() {
  return (
    <AppBar position='static' style={{ top: 'auto', bottom: 0, backgroundColor: GREY.dark, padding: '25px 10px 25px 10px' }}>
      <Toolbar>
        <Grid container>
          <Grid item container xs={6} style={{ display: 'flex', alignItems: 'center' }}>

            {/* --- SQUARE LOGO --- */}
            <Grid item>
              <Link to='/'>
                <img
                  height={75}
                  mode={'fill'}
                  src={KCLogo}
                  alt={'Logo'}
                />
              </Link>
            </Grid>
          </Grid>

          {/* --- SOCIAL BUTTONS --- */}
          <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', color: GREY.text }}>
            <Typography variant='body1'>2223 Scottsville Rd.</Typography>
            <Typography variant='body1'>Glasgow, KY 42141</Typography>
            <Typography variant='body1'>Tel: (270) 629-2886</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
