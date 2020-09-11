import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Historic from '../pages/Historic';
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:data" component={Historic} />
  </Switch>
);

export default Routes;
