import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from '../views/';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}
