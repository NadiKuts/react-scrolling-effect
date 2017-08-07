import React, { Component } from 'react';
import '../App.css';
import ropeImg from './images/rope.png';

class Ropes extends Component {
  render() {
    return (
      <div className="Ropes">
        <div className='Rope'>
          <img src={ropeImg} />
        </div>
        <div className='Rope'>
          <img src={ropeImg} />
        </div>
      </div>
    );
  }
}

export default Ropes;