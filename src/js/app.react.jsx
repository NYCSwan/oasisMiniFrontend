import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import 'babel-polyfill';

// import RouteNavItem from './components/RouteNavItem.react';
import PagerBack from './pagerBack.react';
import Routes from './routes';
import { authUser, signOutUser } from "../libs/awsLibs";

class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string
    }).isRequired
  };

  state = {
    isAuthenticated: false,
    isAuthenticating: true
  }

  async componentDidMount() {
    try {
      if (await authUser()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      console.log(e);
    }
    this.authenticating();
    // this.setState({ isAuthenticating: false, });
  }

  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleSelect = eventKey => {
    console.log(`selected ${eventKey}`);
  }

  handleLogout = ( event ) => {
    console.log(`handle logout ${event}`);
    signOutUser();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");

  }

  authenticating = () => {
    this.setState({ isAuthenticating: false });
  }

  render() {
    const { match } = this.props;
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      !this.state.isAuthenticating &&
      <div>
        <Navbar inverse collapseOnSelect fluid className="container-fluid">
          <Navbar.Header>
            <Navbar.Brand className={`brandLogo ${match.path}`} id="navbarbrand">
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
              <IndexLinkContainer to='/signup'>
                <NavItem key={1}>
                  Signup
                </NavItem>
              </IndexLinkContainer>,
              <IndexLinkContainer to='/login'>
                <NavItem key={2}>
                  Login
                </NavItem>
              </IndexLinkContainer>
              ]}
            </Nav>
          </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}
export default withRouter(App);
