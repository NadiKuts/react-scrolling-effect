import React, { Component } from 'react';
import './Entree.css';
import BackgroundCard from './BackgroundCard';
import EntreeCard from './EntreeCard';
import PhotoEntree from './PhotoEntree';

class ContainerEntree extends Component {
  render() {
    return (
      <div className="ContainerEntree">
        <BackgroundCard></BackgroundCard>
        <EntreeCard scrolled={this.props.inView}></EntreeCard>
        <PhotoEntree initialAnimation={this.props.initialAnimation} inView={this.props.inView} partlyInView={this.props.partlyInView}></PhotoEntree>
      </div>
    );
  }
}

export default ContainerEntree;