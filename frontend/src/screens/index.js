import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { WeatherList, WeatherDetail } from './Weather';

const Routes = () => {
  return (
    <Switch>
      <Route path="/:id" component={WeatherDetail} />
      <Route path="/" component={WeatherList} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
