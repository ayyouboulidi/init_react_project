import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Test from './childs/Child'

class App extends Component {
  render() {
    return (
      <div>
        this is the parents
        <Test/>
      </div>
    );
  }
}

export default App;
