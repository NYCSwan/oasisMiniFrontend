import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MonitorSubLayout from './monitor_sublayout.react';
import ControlSubLayout from './control_sublayout.react';
import PlantsSubLayout from './plants_sublayout.react';
import AppliedRoute from './applied_routes';
import Homepage from './Homepage.react';
import Tutorials from './tutorials.react';
import Login from './login/login.react';
import NotFound from './helpers/not_found.react';
import Signup from './signup.react';

export default ({childProps}) =>
  <Switch>
    <AppliedRoute path="/" exact component={Homepage} props={childProps} />
    <AppliedRoute path='/login' exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path='/monitor' exact component={MonitorSubLayout} props={childProps} />
    <AppliedRoute path='/controls' exact component={ControlSubLayout} props={childProps} />
    <AppliedRoute path='/tutorials' exact component={Tutorials} props={childProps} />
    <AppliedRoute path='/plants' exact component={PlantsSubLayout} props={childProps} />
    <Route component={NotFound} />
  </Switch>;

// Routes.propTypes = {
//   match: PropTypes.shape({
//     path: PropTypes.string
//   }).isRequired
// };
// export default Routes;
