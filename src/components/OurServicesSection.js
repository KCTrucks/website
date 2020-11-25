import React from 'react';
import {
  Link,
  Typography
} from '@material-ui/core';

export default function OurServicesSection({ style = {} }) {
  return (
    <div style={style}>
      <Typography variant='h3'>The KC-Trucks Spray-On Bed Liner</Typography>
      <Typography variant='body1' style={{ marginBottom: '2em' }}>A high pressure poly-urea coating that looks great and lasts forever. <Link href='/bed-liner'>Learn more.</Link></Typography>

      <Typography variant='h3'>Leer Tops and Lids</Typography>
      <Typography variant='body1' style={{ marginBottom: '2em' }}>The industry leader in fiberglass truck bed tonneaus and toppers. Many styles of bed covers available. Dealer demos and consignment lids on site are heavily discounted!</Typography>

      <Typography variant='h3'>Complete Towing Solutions</Typography>
      <Typography variant='body1' style={{ marginBottom: '2em' }}>B&W turnover ball goosenecks, hitches, plugs, trailer lights, wiring, and brakes.</Typography>

      <Typography variant='h3'>Full Line of Accessories</Typography>
      <Typography variant='body1'>Bed mats, floor liners, visors, bug shields, rain guards, mud flaps, chrome trim, racks, toolboxes, cargo items, and much, much more!</Typography>
    </div>
  );
}
