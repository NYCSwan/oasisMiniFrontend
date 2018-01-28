import React, { Component } from "react";
import { Route } from "react-router-dom";

class AppliedRoute extends Component {
    render() {
        const Comp = this.props.component;
        const childProps = this.props.props;
        const exact = this.props.exact;
        const path = this.props.path;

        return (
            <Route path={path} exact={exact} render={(routerProps) => {
                return (
                    <Comp {...routerProps} {...childProps}/>
                    //spread operator is adding all properties of routerProps & childProps to Comp
                   // i.e. <Comp match={match} location={location} whatever={whatever}>
                   //this is useful because we cannot predict what gets passed in to childProps, and we probably dont know what is in routerProps because it is a library
                );
            }}/>
        );
    }
 };

export default AppliedRoute;
