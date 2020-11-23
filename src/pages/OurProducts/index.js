import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';

// Images
import Products from '../../images/stock/Products.png';

// Components
import ImageTitle from '../../components/ImageTitle';

// Constants
const HITCH_COMPANIES = [
  { name: "B&W", href: "http://www.turnoverball.com/" },
  { name: "Draw-Tite", href: "http://www.draw-tite.com/" },
  { name: "Reese", href: "http://www.reeseprod.com/" },
  { name: "Curt", href: "http://www.curtmfg.com/" },
  { name: "Hoppy/Hopkins", href: "http://www.hopkinstowingsolutions.com/" },
  { name: "Tow Ready", href: "http://www.towready.com/" },
  { name: "Tekonsha", href: "http://www.tekonsha.com/" },
  { name: "PullRite", href: "http://www.pullrite.com/" },
  { name: "Buyers", href: "http://www.buyersproducts.com/" },
  { name: "Nuera Trailer Parts", href: "http://www.nueratrailerparts.com/" },
  { name: "ProMaxx", href: "http://www.promaxxauto.com/" }
];
const LIGHTING_COMPANIES = [
  { name: "KC Hi-Lites", href: "http://www.kchilites.com/" },
  { name: "Hella", href: "http://www.hellausa.com/" },
  { name: "Optronics", href: "http://www.optronicsinc.com/" },
  { name: "IPCW", href: "http://www.ipcw.com/" },
  { name: "Anzo", href: "http://www.anzousa.com/" },
  { name: "Rigid", href: "http://www.rigidindustries.com/" },
  { name: "Grote", href: "http://www.grote.com/America/" },
  { name: "Bargman", href: "http://www.bargman.com/" },
  { name: "PIAA", href: "http://www.piaa.com/" },
  { name: "Recon", href: "http://www.gorecon.com/" },
  { name: "Putco", href: "http://www.putco.com/" }
];
const CHROME_TRIM_COMPANIES = [
  { name: "AVS", href: "http://www.lundinternational.com/brands/avs/" },
  { name: "TrailFX", href: "http://www.trailfx.com/" },
  { name: "ProMaxx", href: "http://www.promaxxauto.com/" },
  { name: "Stampede", href: "http://www.stampedeproducts.com/" },
  { name: "EGR", href: "http://www.egrusa.com/" },
  { name: "Putco", href: "http://www.putco.com/" },
  { name: "TFP", href: "http://www.tfpusa.com/" },
  { name: "Bully/Pilot", href: "http://www.pilotautomotive.com/" },
  { name: "All Sales", href: "http://www.allsalesmfg.com/" },
  { name: "Street Scene", href: "http://www.streetsceneeq.com/" },
  { name: "Trim Brite", href: "http://www.trimbrite.com/" }
];
const BED_ACCESSORY_COMPANIES = [
  { name: "Bedrug", href: "http://www.bedrug.com/" },
  { name: "TrailFX", href: "http://www.trailfx.com/" },
  { name: "Dee Zee", href: "http://www.deezee.com/" },
  { name: "Weathertech", href: "http://www.weathertech.com/" },
  { name: "Kargo Master", href: "http://www.kargomaster.com/" }
];
const TOOL_BOX_COMPANIES = [
  { name: "UWS", href: "http://www.uwsta.com/" },
  { name: "Dee Zee", href: "http://www.deezee.com/" },
  { name: "TrailFX", href: "http://www.trailfx.com/" },
  { name: "Delta", href: "http://www.deltastorage.com/" },
  { name: "Weather Guard", href: "http://www.weatherguard.com/" },
  { name: "Lund", href: "http://www.lundinternational.com/" },
  { name: "ProMaxx", href: "http://www.promaxxauto.com/" }
];
const TRUCK_TOP_COMPANIES = [
  { name: "Leer", href: "http://www.leer.com/" },
  { name: "Extang", href: "http://www.extang.com/" },
  { name: "UnderCover", href: "http://www.undercoverinfo.com/" },
  { name: "Roll-N-Lock", href: "http://www.rollnlock.com/" },
  { name: "Access", href: "http://www.agricover.com/" },
  { name: "Lund", href: "http://www.lundinternational.com/" },
  { name: "Truxedo", href: "http://www.truxedo.com/" },
  { name: "Bestop", href: "http://www.bestop.com/" },
  { name: "BAK", href: "http://www.bakliner.com/" }
];
const GRILL_GUARD_COMPANIES = [
  { name: "Ranch Hand", href: "http://www.ranchhand.com/" },
  { name: "Frontier", href: "http://www.frontier-gear.com/" },
  { name: "TrailFX", href: "http://www.trailfx.com/" },
  { name: "Westin", href: "http://www.westinautomotive.com/" },
  { name: "Smittybilt", href: "http://www.smittybilt.com/" },
  { name: "Go Rhino", href: "http://www.gorhino.com/" },
  { name: "ProMaxx", href: "http://www.promaxxauto.com/" }
];
const STEP_BAR_COMPANIES = [
  { name: "Dee Zee", href: "http://www.deezee.com/" },
  { name: "Luverne", href: "http://www.luvernetruck.com/" },
  { name: "Raptor", href: "http://www.raptorseries.com/" },
  { name: "TrailFX", href: "http://www.trailfx.com/" },
  { name: "Westin", href: "http://www.westinautomotive.com/" },
  { name: "Smittybilt", href: "http://www.smittybilt.com/" },
  { name: "Big Country", href: "http://www.bigcountryauto.com/" },
  { name: "NFab", href: "asdkalkdjaslkjdalkjsdklj" },
  { name: "Go Rhino", href: "http://www.gorhino.com/" },
  { name: "ProMaxx", href: "http://www.promaxxauto.com/" }
];
const WINCH_COMPANIES = [
  { name: "Warn", href: "http://www.warn.com/" },
  { name: "Superwinch", href: "http://www.superwinch.com/" },
  { name: "Mile Marker", href: "http://www.milemarker.com/" },
  { name: "Westin", href: "http://www.westinautomotive.com/" },
  { name: "Smittybilt", href: "http://www.smittybilt.com/" }
];
const AIR_RIDE_COMPANIES = [
  { name: "Firestone", href: "http://www.firestoneip.com/" },
  { name: "Air Lift", href: "http://www.airliftcompany.com/" }
];
const PERFORMANCE_AIR_COMPANIES = [
  { name: "aFe Power", href: "http://www.afepower.com/" },
  { name: "Airaid", href: "http://www.airaid.com/" },
  { name: "K&N", href: "http://www.knfilters.com/" },
  { name: "Volant", href: "http://www.volant.com/" },
  { name: "Banks Power", href: "http://www.bankspower.com/" },
  { name: "Bully Dog", href: "http://www.bullydog.com/" }
];

export default class OurProducts extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: '5em' }}>
        <ImageTitle image={Products} title='Our Products' />

        <Container variant='main' align='center'>
          <Typography variant='h2' style={{ marginTop: '1em' }}>Below Are Links To Many Of Our Favorite Suppliers & Manufacturers</Typography>
          <Typography variant='subtitle1' style={{ marginBottom: '1em' }}>Check Them Out, Find Exactly What Your Looking For, Give Us A Call, & Let Us Do The Rest!</Typography>

          <Typography variant='h3' style={{ marginTop: '2em' }}>Hitches/Towing</Typography>
          <Typography variant='body1'>
            {HITCH_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Lighting</Typography>
          <Typography variant='body1'>
            {LIGHTING_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Chrome & Trim</Typography>
          <Typography variant='body1'>
            {CHROME_TRIM_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Bed Accessories</Typography>
          <Typography variant='body1'>
            {BED_ACCESSORY_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Tool Boxes</Typography>
          <Typography variant='body1'>
            {TOOL_BOX_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Truck Tops, Lids, & Covers</Typography>
          <Typography variant='body1'>
            {TRUCK_TOP_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Grill Guards/Bumpers</Typography>
          <Typography variant='body1'>
            {GRILL_GUARD_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Step Bars</Typography>
          <Typography variant='body1'>
            {STEP_BAR_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Winches</Typography>
          <Typography variant='body1'>
            {WINCH_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Air Ride Systems</Typography>
          <Typography variant='body1'>
            {AIR_RIDE_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>

          <Typography variant='h3' style={{ marginTop: '1.5em' }}>Performance Air Induction</Typography>
          <Typography variant='body1'>
            {PERFORMANCE_AIR_COMPANIES.map((company, index) =>
              <React.Fragment key={index}><Link href={company.href} target="_blank" rel="noopener">{company.name}</Link>, </React.Fragment>
            )}
             & More!
          </Typography>
        </Container>
      </div>
    );
  }
}
