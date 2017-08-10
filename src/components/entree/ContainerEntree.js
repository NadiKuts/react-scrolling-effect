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
        <EntreeCard scrolled={this.props.scrolled}></EntreeCard>
        <PhotoEntree scrolled={this.props.scrolled}></PhotoEntree>
      </div>
    );
  }
}

export default ContainerEntree;