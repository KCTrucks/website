import React from 'react';
import { Container, Hidden, Typography } from '@material-ui/core';

// Images
import Garage from '../../images/stock/Garage.jpg';

// Components
import ImageTitle from '../../components/ImageTitle';
import OurServicesSection from '../../components/OurServicesSection';

export default class OurServices extends React.Component {
  render() {
    const bodyText = "We install everything we sell. Stop by and get the kind of service only available from a locally owned and operated establishment. You can park easily, see and touch products, and talk to the owner and installers.";
    return (
      <div style={{ marginBottom: '5em' }}>
        <ImageTitle image={Garage} title='Our Services' />
        <Container variant='main' align='center'>
          <div style={{ margin: '3em 0em 3em 0em' }}>
            <Hidden smDown>
              <Typography variant='h2' component='body1'>{bodyText}</Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant='h3' component='body1'>{bodyText}</Typography>
            </Hidden>
          </div>

          <OurServicesSection />
        </Container>
      </div>
    );
  }
}
