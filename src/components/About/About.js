import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router';
import './About.css';

export default class About extends Component{
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>About</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br/>
          <Link to="/">Home</Link>//
          <Link to="/About">About</Link>
        </p>
        <p>
          This is an example of a basic react web app with an initiated router.
        </p>
      </div>
    );
  }
}
