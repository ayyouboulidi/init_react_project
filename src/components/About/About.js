import React, { Component } from 'react';
import logo from '../../logo.svg';
import prof from '../../prof.jpg'
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
          This is an example of a basic react web app with an initiated router.<br/>
          <Link to="/"><button>Home</button></Link><Link to="/About"><button>About</button></Link>
        </p>
        <p>
          <img src={prof} alt="ayyoub.oulidi"/><br/>
          Ayyoub OULIDI<br/>
          Software engineer and web developer.
        </p>
      </div>
    );
  }
}
