import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    player1: 0,
    player2: 0
  }

  render() {
    return (
      <div className="App">
        <h1>Moncola</h1>
        <h2> player 1: {this.state.player1} | player 2: {this.state.player1}</h2>
      </div>
    );
  }
}

export default App;
