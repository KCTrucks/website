import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import ContactUs from '../pages/ContactUs';
import AppBar from './AppBar';

function Navigation() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path='/contact-us'>
          <ContactUs />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default Navigation;
