import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
//import { post } from '../../../../helpers/Ajax';

//import md5 from 'md5';

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(userActions.logout());

    this.state = {
        username: '',
        password: '',
        submitted: false,
        redirectToReferrer: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //state = {
  //  redirectToReferrer: false
  //}
  login(username, password){

    fetch('http://localhost:9763/api/v1/login', {
      method: 'GET',
      //mode: 'cors',
      headers: {
        //Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          data : { u: username, p: md5(password) }
        }
      )
    })
    .then( result => {
      return result.json();
    })
    .catch((error) => alert(error));
    /*post('http://localhost:9763/api/v1/login', { data : { u: username, p: md5(password) }})
    .then( data => {
      console.log(data)
    });*/

    /*localStorage.setItem('authToken', 'test');
    this.setState(() => ({
      redirectToReferrer: true
    }))*/
  }

  onChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e){
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password)
      this.login(username, password);
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
        </form>
      </div>
    );
  }
}

export default Login;
