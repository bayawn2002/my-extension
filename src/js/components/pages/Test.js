import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

//import {Router, Route} from 'react-router';

class Test extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">

          <p>
            Test
            <span>{this.props.showTest}</span>
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
      </div>
    );
  }
}

export default Test;
