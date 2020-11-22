import React from 'react';
import { Container, Grid, IconButton, Typography, withStyles, makeStyles } from '@material-ui/core';

// Images
import Products from '../../images/stock/Products.png';

import Buyers from '../../images/companies/Buyers.png';
import BW from '../../images/companies/BW.png';
import Curt from '../../images/companies/Curt.png';
import DrawTite from '../../images/companies/DrawTite.png';
import Hopkins from '../../images/companies/Hopkins.png';
import ProMaxx from '../../images/companies/ProMaxx.jpg';
import PullRite from '../../images/companies/PullRite.png';
import Reese from '../../images/companies/Reese.png';
import Tekonsha from '../../images/companies/Tekonsha.png';
import TexTrail from '../../images/companies/TexTrail.png';
import TowReady from '../../images/companies/TowReady.jpg';

// Components
import ImageTitle from '../../components/ImageTitle';

// Constants
const HITCH_COMPANIES = [
  {
    href: 'http://www.turnoverball.com/',
    src: BW,
    alt: 'BW Trailer Hitches Logo'
  },
  {
    href: 'https://www.draw-tite.com/',
    src: DrawTite,
    alt: 'Draw Tite Logo'
  },
  {
    href: 'https://www.reeseprod.com/',
    src: Reese,
    alt: 'Reese Logo'
  },
  {
    href: 'http://www.curtmfg.com/',
    src: Curt,
    alt: 'Curt Logo'
  },
  {
    href: 'http://www.hopkinstowingsolutions.com/',
    src: Hopkins,
    alt: 'Hopkins Logo'
  },
  {
    href: 'http://www.towready.com/',
    src: TowReady,
    alt: 'Tow Ready Logo'
  },
  {
    href: 'http://www.tekonsha.com/',
    src: Tekonsha,
    alt: 'Tekonsha Logo'
  },
  {
    href: 'http://www.pullrite.com/',
    src: PullRite,
    alt: 'Pull Rite Logo'
  },
  {
    href: 'http://www.buyersproducts.com/',
    src: Buyers,
    alt: 'Buyers Logo'
  },
  {
    href: 'http://www.nueratrailerparts.com/',
    src: TexTrail,
    alt: 'Tex Trail Logo'
  },
  {
    href: 'http://www.promaxxauto.com/',
    src: ProMaxx,
    alt: 'Pro Maxx Logo'
  }
];
const LIGHTING_COMPANIES = [
  // {
  //   href: 'http://www.kchilites.com/',
  //   src: KC,
  //   alt: 'KC Hilites Logo'
  // },
  // {
  //   href: 'http://www.hellausa.com/',
  //   src: Hella,
  //   alt: 'Hella Logo'
  // },
  // {
  //   href: 'http://www.optronicsinc.com/',
  //   src: Optronics,
  //   alt: 'Hella Logo'
  // },
  // {
  //   href: 'http://www.ipcw.com/',
  //   src: IPCW,
  //   alt: 'IPCW Logo'
  // },
  // {
  //   href: 'http://www.ipcw.com/',
  //   src: Optronics,
  //   alt: 'Hella Logo'
  // },
]

const styles = theme => ({
  companyImage: {
    [theme.breakpoints.down('md')]: {
      width: 100,
      height: 100
    },
    [theme.breakpoints.up('lg')]: {
      width: 150,
      height: 150
    }
  }
});

class OurProducts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ paddingBottom: '5em' }}>
        <ImageTitle image={Products} title='Our Products' />

        <Container variant='main' align='center'>
          <Typography variant='h2' style={{ marginTop: '1em' }}>Below Are Links To Many Of Our Favorite Suppliers & Manufacturers</Typography>
          <Typography variant='subtitle1' style={{ marginBottom: '1em' }}>Check Them Out, Find Exactly What Your Looking For, Give Us A Call, & Let Us Do The Rest!</Typography>

          <Typography variant='h3'>Hitches/Towing</Typography>
          <Grid container direction='row' justify='center'>
            {HITCH_COMPANIES.map((company, index) => (
              <CompanySection
                key={index}
                href={company.href}
                src={company.src}
                alt={company.alt} />
            ))}
          </Grid>

          <Typography variant='h3'>Lighting</Typography>
          <Grid container direction='row' justify='center'>
          {LIGHTING_COMPANIES.map((company, index) => (
            <CompanySection
              key={index}
              href={company.href}
              src={company.src}
              alt={company.alt} />
          ))}
          </Grid>

          <Typography variant='h3'>Chrome & Trim</Typography>
          <Typography variant='h3'>Bed Accessories</Typography>
          <Typography variant='h3'>Tool Boxes</Typography>
          <Typography variant='h3'>Truck Tops, Lids, & Covers</Typography>
          <Typography variant='h3'>Grill Guards/Bumpers</Typography>
          <Typography variant='h3'>Step Bars</Typography>
          <Typography variant='h3'>Winches</Typography>
          <Typography variant='h3'>Air Ride Systems</Typography>
          <Typography variant='h3'>Performance Air Induction</Typography>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(OurProducts);

const useStyles = makeStyles(styles);
function CompanySection({ href = null, src, alt, imageClass }) {
  const classes = useStyles();
  return (
    <Grid xs sm md lg={2} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '1em', marginLeft: '1em' }}>
      <IconButton href={href} target='_blank' rel='noopener' disabled={href === null}>
        <img
          className={classes.companyImage}
          style={{ objectFit: 'contain' }}
          src={src}
          alt={alt}
        />
      </IconButton>
    </Grid>
  );
}
