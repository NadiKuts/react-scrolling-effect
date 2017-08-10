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
			isScrolled: false,
      wasLoaded: false,
		};
    this.onScroll = this.onScroll.bind(this);
	}
  
  onScroll = () => {
    if (this.state.isScrolled == false) {
      if (ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top > 0 && 
        ReactDOM.findDOMNode(this.refs.entree).getBoundingClientRect().top < window.innerHeight) {
          	this.setState({isScrolled: true});
      } else {
      }
    } else {
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.onScroll());
    this.setState({wasLoaded: !this.state.wasLoaded});
  }
  render() {
    return (
      <Motion ref="entree" style={{ 

          opacity: spring(this.state.wasLoaded ? 1 : 0),
         }}>
         {({width, opacity}) =>
         <div className="Entree" style={{
            
                opacity: `${opacity}`,
                WebkitTransitionDuration: '0.5s',
                transitionDuration: '0.5s',
                WebkitTransitionTimingFunction: 'ease',
                transitionTimingFunction: 'ease',
                WebkitTransitionDelay: '1s',
                transitionDelay: '1s',
              }}>
           <SideEntree scrolled={this.state.isScrolled}></SideEntree>
           <ContainerEntree scrolled={this.state.isScrolled}></ContainerEntree>
         </div>
       }
      </Motion>
      
    );
  }
}

export default Entree;