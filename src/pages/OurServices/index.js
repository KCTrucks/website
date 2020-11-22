import React from 'react';
import { Container, Hidden, Typography, Link } from '@material-ui/core';

// Images
import Garage from '../../images/stock/Garage.png';

// Components
import ImageTitle from '../../components/ImageTitle';

export default class OurServices extends React.Component {
  render() {
    const bodyText = "We install everything we sell. Stop by and get the kind of service only available from locally owned and operated establishment. We have easy parking, you can see and touch products, and talk to the owner and installers.";
    return (
      <div>
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

          <Typography variant='h3'>The KC-Truck Liner Spray-On Bed Liner</Typography>
          <Typography variant='body1' style={{ marginBottom: '2em' }}>A high pressure poly-urea coating that looks great and lasts forever. <Link href='/bed-liner'>Learn more.</Link></Typography>

          <Typography variant='h3'>Leer Tops and Lids</Typography>
          <Typography variant='body1' style={{ marginBottom: '2em' }}>The industry leader in fiberglass truck bed tonneaus and toppers. Many styles of bed covers available. Dealer demo's and consignment lids on site are heavily discounted!</Typography>

          <Typography variant='h3'>Complete Towing Solutions</Typography>
          <Typography variant='body1' style={{ marginBottom: '2em' }}>B&W Turnover Ball goosenecks, hitches, plugs, trailer lights, wiring, and brakes.</Typography>

          <Typography variant='h3'>A full line of accessories</Typography>
          <Typography variant='body1' style={{ marginBottom: '2em' }}>Bed mats, floor liners, visors, bug shields, rain guards, mud flaps, chrome trim, racks, toolboxes, cargo items, and much, much more!</Typography>
        </Container>
      </div>
    );
  }
}
