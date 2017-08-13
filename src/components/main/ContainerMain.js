import React, { Component } from 'react';
import './Main.css';
import BackgroundMain from './BackgroundMain';
import MainCard from './MainCard';
import PhotoMain from './PhotoMain';

class ContainerMain extends Component {
  render() {
    return (
      <div className="ContainerMain">
        <BackgroundMain></BackgroundMain>
        <MainCard inView={this.props.inView} partlyInView={this.props.partlyInView}></MainCard>
        <PhotoMain inView={this.props.inView} partlyInView={this.props.partlyInView}></PhotoMain>
      </div>
    );
  }
}

export default ContainerMain;