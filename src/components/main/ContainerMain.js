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
        <MainCard scrolled={this.props.scrolled}></MainCard>
        <PhotoMain scrolled={this.props.scrolled}></PhotoMain>
      </div>
    );
  }
}

export default ContainerMain;