import React from "react";
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';

const AppliedRoute = ( { component: C, props: cProps } ) => (
  <Route render={props => <C {...props} {...cProps} />} />
)

AppliedRoute.propTypes = {
  component: PropTypes.string.isRequired,
  props: PropTypes.bool.isRequired,
  rest: PropTypes.shape({
    props: PropTypes.func
  }).isRequired,
}

export default AppliedRoute;
