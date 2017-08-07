import React, { Component } from 'react';
import './App.css';
import Ropes from './components/Ropes';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ropes></Ropes>
        <Board></Board>
      </div>
    );
  }
}

export default App;
