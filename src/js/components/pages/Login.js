import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import auth from '../../helpers/Auth';
//import { get } from '../../../../helpers/Ajax';

import md5 from 'md5';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        submitted: false,
        redirectToReferrer: false,
        loginError: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e){
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password){
      auth.login(username, md5(password))
      .then( result => {
        console.log(result)
        if(!result.loginFailed){
            this.setState(() => ({
              redirectToReferrer: true
            }));
        }else{
          this.setState(() => ({
            loginError : 'Log in failed. Please try again.'
          }));
        }
      });
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="username" onChange={this.onChange} />
          <input type="password" name="password" onChange={this.onChange} />
          <input type="submit" value="Submit" />

          <div>{this.state.loginError}</div>
        </form>
      </div>
    );
  }
}

export default Login;
