import React, { Component } from 'react';
import './Entree.css';
import SideEntree from './SideEntree';
import ContainerEntree from './ContainerEntree';

class Entree extends Component {
  render() {
    return (
      <div className="Entree">
        <SideEntree></SideEntree>
        <ContainerEntree></ContainerEntree>
      </div>
    );
  }
}

export default Entree;