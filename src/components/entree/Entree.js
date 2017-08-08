import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Entree.css';
import SideEntree from './SideEntree';
import ContainerEntree from './ContainerEntree';

class Entree extends Component {
  onScroll = () => {
    
    if (ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top > 0 && 
      ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top < window.innerHeight) {
      console.log('in view!');
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  render() {
    return (
      <div className="Entree" ref="entree">
        <SideEntree></SideEntree>
        <ContainerEntree></ContainerEntree>
      </div>
    );
  }
}

export default Entree;