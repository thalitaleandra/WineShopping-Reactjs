import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repositories';
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:data" component={Repository} />
  </Switch>
);

export default Routes;
