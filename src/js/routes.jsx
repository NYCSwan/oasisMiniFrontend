import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import MonitorSubLayout from './monitor_sublayout.react';
import ControlSubLayout from './control_sublayout.react';
import PlantsSubLayout from './plants_sublayout.react';
import AppliedRoute from './applied_routes';
import Homepage from './Homepage.react';
import Tutorials from './tutorials.react';
import Login from './login/login.react';
import NotFound from './helpers/not_found.react';
import Signup from './signup.react';

const Routes = ({childProps}) => (
  <Switch>
    <Route path="/" exact component={Homepage} props={childProps} />
    <Route path='/login' component={Login} props={childProps} />
    <Route path="/signup" component={Signup} props={childProps} />
    <AppliedRoute path='/monitor' exact component={MonitorSubLayout} props={childProps} />
    <AppliedRoute path='/controls' exact component={ControlSubLayout} props={childProps} />
    <AppliedRoute path='/tutorials' exact component={Tutorials} props={childProps} />
    <AppliedRoute path='/plants' exact component={PlantsSubLayout} props={childProps} />
    <Route component={NotFound} />
  </Switch>
);

Routes.propTypes = {
  childProps: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Routes;
