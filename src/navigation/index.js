import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import AppBar from './AppBar';

function Navigation() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default Navigation;
