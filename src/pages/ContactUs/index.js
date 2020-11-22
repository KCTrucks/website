import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';

// Images
import KCTrucksBanner from '../../images/stock/KCTrucksBanner.png';

// Components
import ImageTitle from '../../components/ImageTitle';

export default class ContactUs extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: '5em' }}>
        <ImageTitle image={KCTrucksBanner} title='Contact Us' />

        <Container variant='main'>
          <Typography variant='h2' style={{ marginTop: '1em' }}>KC Trucks</Typography>
          <Typography variant='body1'>2223 Scottsville Rd.</Typography>
          <Typography variant='body1'>Glasgow, KY 42141</Typography>
          <Typography variant='body1'>Tel: (270) 629-2886</Typography>
          <Link href='https://www.google.com/search?q=kc+trucks+glasgow+ky&oq=kc+trucks+glasgow+ky&aqs=chrome..69i57j46i175i199j0i22i30.2488j0j7&sourceid=chrome&ie=UTF-8#'><Typography variant='body1'>Get Directions</Typography></Link>

          <Typography variant='body1' style={{ marginTop: '1em' }}>
            We are usually open from 8:00 AM to 4:00 PM CST Monday-Friday, and 8:00 AM to 10:00 AM CST on Saturday, though those hours often change. Please contact us to confirm hours. Please also let us know if special arrangements or adjusted hours are needed to meet your needs and we will try to accommodate.
          </Typography>
        </Container>
      </div>
    );
  }
}
