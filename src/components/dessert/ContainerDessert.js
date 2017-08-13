import React, { Component } from 'react';
import './Dessert.css';
import BackgroundDessert from './BackgroundDessert';
import DessertCard from './DessertCard';
import PhotoDessert from './PhotoDessert';

class ContainerDessert extends Component {
  render() {
    return (
      <div className="ContainerDessert">
        <BackgroundDessert></BackgroundDessert>
        <DessertCard scrolled={this.props.inView}></DessertCard>
        <PhotoDessert initialAnimation={this.props.initialAnimation} inView={this.props.inView} partlyInView={this.props.partlyInView}></PhotoDessert>
      </div>
    );
  }
}

export default ContainerDessert;