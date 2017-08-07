import React, { Component } from 'react';
import './Entree.css';
import dishPic from '../images/SideEntree.png';

class SideEntree extends Component {
  render() {
    return (
      <div className="SideEntree">
        <img src={dishPic}/>
      </div>
    );
  }
}

export default SideEntree;