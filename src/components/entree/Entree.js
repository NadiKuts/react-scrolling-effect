import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';
import './Entree.css';
import SideEntree from './SideEntree';
import ContainerEntree from './ContainerEntree';

class Entree extends Component {
  constructor(props) {
		super(props);
		this.state = {
			isScrolled: false
		};
    this.onScroll = this.onScroll.bind(this);
	}
  onScroll = () => {
    if (this.state.isScrolled == false) {
      if (ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top > 0 && 
        ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top < window.innerHeight) {
          	this.setState({isScrolled: true});
      }
    } else {
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.onScroll());
  }
  render() {
    return (
      <div className="Entree" ref="entree">
        <SideEntree scrolled={this.state.isScrolled}></SideEntree>
        <ContainerEntree scrolled={this.state.isScrolled}></ContainerEntree>
      </div>
    );
  }
}

export default Entree;