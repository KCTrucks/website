import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';

function Navigation() {
  return (
    <>
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default Navigation;
