import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import config from './../../config';
import LoaderButton from "../components/LoaderButton.react";

class Login extends Component {
  state = {
    isLoading: false,
    email: '',
    password: ''
  };

  // login not working this = login
  // hook up iot subscription
  login = (email, password) => {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(result),
        onFailure: err => reject(err)
      })
    );
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await this.login(this.state.email, this.state.password);
      console.log('Logged in');
      this.props.userHasAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  // async handleSubmit(event) {
  //   // debugger
  //   // const self = this;
  //   event.preventDefault();
  //   // async (event) => {
  //     // debugger;
  //      this.setState({ isLoading: true });
  //
  //     try {
  //       await this.login(this.state.email, this.state.password);
  //       this.props.userHasAuthenticated(true);
  //       alert("Logged in");
  //     } catch (e) {
  //       alert(e);
  //        this.setState({ isLoading: false });
  //     }
  //   // }
  // }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      </div>
    );
  }
}

export default Login;
