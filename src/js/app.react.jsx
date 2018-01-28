import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'babel-polyfill';

import RouteNavItem from './components/RouteNavItem.react';
import PagerBack from './pagerBack.react';
import Routes from './routes';

class App extends Component {
  static propTypes = {
  //   history: PropTypes.shape({
  //     replace: PropTypes.func,
  //     length: PropTypes.number,
  //     action: PropTypes.string
  //   }).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string
    }).isRequired
  };

  state = {
    isAuthenticated: false
  }

  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleSelect = eventKey => {
    console.log(`selected ${eventKey}`);
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
  }

  render() {
    const { match } = this.props;
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div>
        <Navbar inverse collapseOnSelect fluid className="container-fluid">
          <Navbar.Header>
            <Navbar.Brand className={`brandLogo`} id="navbarbrand">
              <Link to="/" href="/" className="logo img-responsive center-block" />
              <div className="backImage">
                <PagerBack className="header" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="bs-navbar-collapse">
            <Nav bsStyle="pills" pullRight onSelect={this.handleSelect}>
              <NavItem className="navItem" eventKey={3} href="/monitor">
                Monitor
              </NavItem>
              <NavItem className="navItem" eventKey={4} href="/controls">
                Controls
              </NavItem>
              <NavItem className="navItem" eventKey={1} href="#">
                My Account
              </NavItem>
              <NavItem className="navItem" eventKey={2} href="#">
                Support
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <h1 className="title Futura-Lig">title</h1>
          <Nav pullRight>
          {this.state.isAuthenticated
            ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
            : [
                <RouteNavItem key={1} href="/signup">
                  Signup
                </RouteNavItem>,
                <RouteNavItem key={2} href="/login">
                  Login
                </RouteNavItem>
              ]}
          </Nav>
        </Navbar>
        <Routes childProps={childProps} {...this.props} />
      </div>
    );
  }
}

export default App;
