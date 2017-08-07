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
        <EntreeCard></EntreeCard>
        <PhotoEntree></PhotoEntree>
      </div>
    );
  }
}

export default ContainerEntree;