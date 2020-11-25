import React from 'react';
import { Button, Container, Grid, Link, Typography, withStyles } from '@material-ui/core';

// Images
import KCTrucksCorner from '../../images/stock/KCTrucksCorner.jpg';
import BackOfGarage from '../../images/stock/BackOfGarage.jpg';

// Components
import OurServicesSection from '../../components/OurServicesSection';

// Constants
import { YELLOW } from '../../constants';

const styles = theme => ({
  titleLogo: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right',
      marginRight: '6rem'
    }
  },
  titleText: {
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginLeft: '10%',
      marginRight: '10%',
      fontSize: '35px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '65%',
      textAlign: 'right',
      marginRight: '6rem',
      fontSize: '50px'
    }
  },
  subtitleText: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginLeft: '10%',
      marginRight: '10%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '65%',
      textAlign: 'right',
      marginRight: '6rem'
    }
  },
  titleBackground: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll'
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }
  },
  titleLogoGrid: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    }
  },
  titleGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    }
  }
});

class Landing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.titleBackground} style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${KCTrucksCorner})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '4rem',
            paddingBottom: '4rem'
        }}>
          <Grid container direction='column'>
            <Grid item className={classes.titleGrid}>
              <Typography variant='h2' component='h1' className={classes.titleText}>South Central Kentucky's Full Service Automotive Aftermarket Accessories Shop</Typography>
              <Typography variant='subtitle1' className={classes.subtitleText}>We specialize in spray-on bed liners, Leer caps & lids, and complete towing solutions.</Typography>
            </Grid>
            <Grid item className={classes.titleLogoGrid}>
              <Button variant='contained' href='/contact-us' style={{ backgroundColor: YELLOW.main, textTransform: 'none', color: 'white', marginTop: '2em' }} className={classes.titleLogo}>
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </div>

        {/* Our Services */}
        <Container variant='main' align='center' style={{ padding: '4em 1em 5em 1em' }}>
          <Typography variant='h2' style={{ marginBottom: '1em' }}>Our Services</Typography>

          <OurServicesSection />
        </Container>

        {/* Contact Us */}
        <div style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ), url(${BackOfGarage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'scroll'
        }}>
          <Typography variant='h2' style={{ textAlign: 'center', color: 'white', marginBottom: '1em' }}>Visit Us Today</Typography>
          <Grid container direction='row' justify='center' spacing={5}>
            <Grid item>
              <Typography variant='body1' style={{ textAlign: 'center', color: 'white' }}>2223 Scottsville Rd.</Typography>
              <Typography variant='body1' style={{ textAlign: 'center', color: 'white' }}>Glasgow, KY 42141</Typography>
              <Typography variant='body1' style={{ textAlign: 'center', color: 'white' }}>Tel: (270) 629-2886</Typography>
            </Grid>

            <Grid item>
              <Typography variant='body1' style={{ textAlign: 'center', color: 'white' }}>M-F 8:00 AM to 4:00 PM</Typography>
              <Typography variant='body1' style={{ textAlign: 'center', color: 'white' }}>Sat 8:00 AM to 10:00 AM</Typography>
              <Typography variant='body1' style={{ textAlign: 'center', color: 'white' }}>Sun Closed</Typography>
              <Typography variant='body1' style={{ textAlign: 'center', color: 'white' }}>Please call to confirm.</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Landing);
