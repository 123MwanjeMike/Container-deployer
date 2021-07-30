import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from '../views/';
import Form from '../views/form';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
        <Route exact path='/form'>
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}
