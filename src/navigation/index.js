import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Nav
import AppBar from './AppBar';
import Footer from './Footer';

// Pages
import Landing from '../pages/Landing';
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs';
import OurServices from '../pages/OurServices';
import OurProducts from '../pages/OurProducts';
import BedLiner from '../pages/BedLiner';

function Navigation() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path='/bed-liner'>
          <BedLiner />
        </Route>
        <Route path='/products'>
          <OurProducts />
        </Route>
        <Route path='/services'>
          <OurServices />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route path='/contact-us'>
          <ContactUs />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default Navigation;
