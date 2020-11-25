import React from 'react';
import { Container, Grid, Hidden, Link, Typography, withStyles } from '@material-ui/core';

// Images
import SideDesk from '../../images/stock/SideDesk.png';
import ChristmasParade from '../../images/stock/ChristmasParade.png';
import Ken from '../../images/people/Ken.jpg';
import Drew from '../../images/people/Drew.jpg';

// Components
import ImageTitle from '../../components/ImageTitle';

const styles = theme => ({
  drewGrid: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '30px'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '75px'
    },
  }
});

class AboutUs extends React.Component {
  render() {
    const { classes } = this.props;
    const LOCAL_MESSAGE = "For a small, locally-owned business, it's never just about business— we live here. We hope you'll visit.";
    return (
      <div>
        <ImageTitle image={SideDesk} title='About Us' />

        <Container variant='main' style={{ padding: '2em 2em 0em 2em' }} align='center'>

          <Typography variant='h3' component='body1'>
            The shop includes a 1000 sq ft showroom and is located in Glasgow, Kentucky on US 31E just 1/4 mile south of the Cumberland Parkway. Established in 2004, we have helped thousands of customers with a variety of parts and services.
          </Typography>

          <div style={{ marginTop: '1em' }}>
            <br /><Link href='/services'><Typography variant='h3' component='body1'>Our Services</Typography></Link>
            <br /><Link href='/products'><Typography variant='h3' component='body1'>Our Products</Typography></Link>
            <br /><Link href='/contact-us'><Typography variant='h3' component='body1'>Contact Us</Typography></Link>
          </div>

          <div>
            <Typography align='center' variant='h2' style={{ fontSize: '40px', margin: '1.5em 0em 0.5em 0em' }}>
              Our Team
            </Typography>
            <Grid container direction='row' justify='center' style={{ marginBottom: '100px' }}>
              {/* Ken */}
              <Grid item xs={12} sm='auto'>
                <Grid container direction='column'>
                  <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      width={200}
                      height={200}
                      src={Ken}
                      alt={'Ken Cambron'}
                      style={{ borderRadius: 100, objectFit: 'cover' }}
                    />
                  </Grid>
                  <Grid item style={{ marginTop: '10px' }}>
                    <Typography variant='body1' style={{ textAlign: 'center' }}>Ken Cambron</Typography>
                    <Typography variant='body2' style={{ textAlign: 'center' }} color='primary'>Owner</Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* Drew */}
              <Grid item xs={12} sm='auto' className={classes.drewGrid}>
                <Grid container direction='column'>
                  <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      width={200}
                      height={200}
                      src={Drew}
                      alt={'Drew Berry'}
                      style={{ borderRadius: 100, objectFit: 'cover' }}
                    />
                  </Grid>
                  <Grid item style={{ marginTop: '10px' }}>
                    <Typography variant='body1' style={{ textAlign: 'center' }}>Drew Berry</Typography>
                    <Typography variant='body2' style={{ textAlign: 'center' }} color='primary'>Sales & Service Manager</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>

        <div style={{ backgroundColor: 'lightgrey', padding: '2em 0em 2em 0em' }}>
          <Container variant='main'>
            <Grid container direction='row' justify='center' align='center' spacing={2}>
              <Grid item lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={ChristmasParade} alt='Glasgow Christmas Parade Float' style={{ maxWidth: 400, maxHeight: 400, objectFit: 'contain' }} />
              </Grid>

              <Grid item lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Hidden mdUp>
                  <Typography variant='h3' component='h2' style={{ textAlign: 'center' }}>{LOCAL_MESSAGE}</Typography>
                </Hidden>
                <Hidden smDown>
                  <Typography variant='h2' style={{ textAlign: 'center' }}>{LOCAL_MESSAGE}</Typography>
                </Hidden>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AboutUs);
