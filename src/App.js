import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentFeedback from './components/CurrentFeedback'

class App extends Component {
  render() {
    // make this a stateful comp.
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* guessingGame.js, make it easy to break down comp. */}
      </div>
    );
  }
}

export default App;
