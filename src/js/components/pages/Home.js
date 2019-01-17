import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      dealergroups : []
    };

    this.loadDealergroups = this.loadDealergroups.bind(this);
  }

  loadDealergroups(){
    return fetch('http://localhost:9763/api/v1/dealergroups', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'//,
        //'Authorization' : auth.getAuthToken()
      }
    })
    .then( result => {
      return result.json();
    })
    .then( data => {
      //console.log(data)
      this.setState({dealergroups: data.data});
    })
    .catch((error) => alert(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">


          <p>
            Edit 1 <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <button onClick={this.loadDealergroups}>Load DealerGroups</button>
        <ul>
          {this.state.dealergroups.map(i => <li>{i.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Home;
