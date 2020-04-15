import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { Weather } from './Weather';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Weather} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
