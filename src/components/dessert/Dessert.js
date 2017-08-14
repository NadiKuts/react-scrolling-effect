import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';
import './Dessert.css';
import SideDessert from './SideDessert';
import ContainerDessert from './ContainerDessert';

class Dessert extends Component {
  constructor(props) {
		super(props);
		this.state = {
      initialAnimation: false,
      inView: false,
      partlyInView: false,
      wasLoaded: false,
      lastScrollPos: 0,
      direction: '',
		};
    this.onScroll = this.onScroll.bind(this);
	}
  
  isVisible = (ref) => {
    const topPart = ReactDOM.findDOMNode(ref).getBoundingClientRect().top;
    const bottomPart = ReactDOM.findDOMNode(ref).getBoundingClientRect().bottom;
    const winHeight = window.innerHeight;
    if ((bottomPart < window.scrollY + winHeight) && (topPart > 0 && topPart < winHeight)) {
      this.setState({
        inView: true,
        partlyInView: false,
      });
    } else if ((bottomPart < window.scrollY + winHeight) || (topPart > 0 && topPart < winHeight)) {
      this.setState({
        inView: false,
        partlyInView: true,
      });
    } else {
      this.setState({
        inView: false,
        partlyInView: false,
      });
    }
  }
  
  onScroll = (event) => {
    /** Detect if component is completely visible */
    if (this.state.initialAnimation == false) {
      this.setState({
        initialAnimation: true,
      });
      this.isVisible(this.refs.dessert);
    } else {
      this.setState({
        initialAnimation: false,
      });
      this.isVisible(this.refs.dessert);
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', (event) => this.onScroll(event));
    this.setState({
      wasLoaded: !this.state.wasLoaded,
    });
  }
  render() {
    return (
      <Motion ref="dessert" style={{ 
          opacity: spring(this.state.wasLoaded ? 1 : 0),
         }}>
         {({width, opacity}) =>
         <div className="Dessert" style={{
                opacity: `${opacity}`,
                WebkitTransitionDuration: '0.5s',
                transitionDuration: '0.5s',
                WebkitTransitionTimingFunction: 'ease',
                transitionTimingFunction: 'ease',
                WebkitTransitionDelay: '1s',
                transitionDelay: '1s',
              }}>
           <SideDessert initialAnimation={this.state.initialAnimation} inView={this.state.inView} partlyInView={this.state.partlyInView}></SideDessert>
           <ContainerDessert initialAnimation={this.state.initialAnimation} inView={this.state.inView} partlyInView={this.state.partlyInView}></ContainerDessert>
         </div>
       }
      </Motion>
      
    );
  }
}

export default Dessert;