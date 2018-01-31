import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import NewGrow from './new_grow.react';
import ExistingGrow from './existing_grow.react';
import ControlSettings from './control_settings.react';
import AppliedRoute from './applied_routes';

const ControlSubLayout = ({ childProps }) => (
  <div className="monitor-sub-layout">
    <Switch>
      <AppliedRoute path="/controls" component={ControlSettings} props={childProps} />
      <AppliedRoute path='/controls/newgrow' component={NewGrow} props={childProps} />
      <AppliedRoute path='/controls/existinggrow' component={ExistingGrow} props={childProps} />
    </Switch>
  </div>
);

ControlSubLayout.propTypes = {
  // match: PropTypes.arrayOf(PropTypes.object).isRequired,
  childProps: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ControlSubLayout;
