import React from 'react';
// import { Navbar, Button } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Homepage from './Homepage.react';
import Login from './login/login.react';

const AppLayout = props => (
  <div className="app-sub-layout">
    <Switch>
      <Route path="/" render={props => <Homepage {...props} />} />
      <Route path={`${props.match.path}/login`} render={props => <Login {...props} />} />
    </Switch>
  </div>
);

AppLayout.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  }).isRequired
};

export default AppLayout;
